# Tailwind2Blocks to new blocks pages migration - Guide

## Architettura della Pagina Footer Blocks

La pagina `src/app/blocks/blocks-footer/page.tsx` è stata costruita seguendo un pattern preciso e riutilizzabile che garantisce:
- **Modularità**: ogni blocco è indipendente e copiabile
- **Reattività**: utilizzo di React hooks per gestire stato e riferimenti
- **User Experience**: feedback visivo immediato per le azioni dell'utente

### Struttura del File

```typescript
"use client";  // Direttiva obbligatoria all'inizio per componenti client-side

// Import dei componenti condivisi
import Navigation from "~/components/Navigation";
import Footer from "~/components/Footer";
import Hero from "~/components/Hero";
import { Copy } from "lucide-react";
import { useRef } from "react";
import { useCopyNotification } from "~/components/useCopyNotification";
import SectionDivider from "~/components/SectionDivider";
import { Button } from "~/components/ui/button";

export default function BlocksFooterPage() {
  // Refs per ogni sezione footer (permettono di accedere al DOM)
  const sectionRef1 = useRef<HTMLElement>(null);
  const sectionRef2 = useRef<HTMLElement>(null);
  const sectionRef3 = useRef<HTMLElement>(null);
  const sectionRef4 = useRef<HTMLElement>(null);
  
  // Hook custom per la notifica di copia
  const [showCopied, triggerCopied] = useCopyNotification();
  
  // Handler che copia l'HTML della sezione negli appunti
  const handleCopy = (ref: React.RefObject<HTMLElement | null>) => {
    const el = ref.current;
    if (el) {
      void navigator.clipboard.writeText(el.outerHTML);
      triggerCopied();
    }
  };
  
  return (
    <>
      {/* Notifica temporanea "Section copied" */}
      {showCopied && (
        <div style={{ position: "fixed", top: 24, right: 24, zIndex: 1000 }}
          className="animate-fade-in rounded bg-black px-4 py-2 text-white shadow-lg">
          Section copied
        </div>
      )}
      
      <Navigation />
      <Hero title="Footer Sections" subtitle="Beautiful footer blocks..." />
      
      <main className="bg-background min-h-screen py-16">
        <div className="mx-auto max-w-7xl space-y-16 px-4 sm:px-6 lg:px-8">
          
          {/* Ogni blocco segue questo pattern */}
          <div className="relative">
            <SectionDivider title="Footer Block 1">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => handleCopy(sectionRef1)}
                className="absolute top-2 right-2"
                aria-label="Copy section HTML"
              >
                <Copy size={18} />
              </Button>
            </SectionDivider>
            
            {/* Sezione footer con ref collegato */}
            <section ref={sectionRef1} className="bg-gray-50 font-light pt-12 text-gray-500">
              {/* Contenuto HTML convertito in JSX */}
            </section>
          </div>
          
          {/* ...altri blocchi footer... */}
          
        </div>
      </main>
      
      <Footer />
    </>
  );
}
```

## Pattern di Migrazione HTML → JSX

### 1. Conversione degli Attributi HTML
```html
<!-- HTML originale -->
<div class="container" onclick="handleClick()">
  <img src="image.jpg" />
</div>

<!-- JSX convertito -->
<div className="container" onClick={handleClick}>
  <img src="image.jpg" />
</div>
```

**Regole applicate:**
- `class` → `className`
- `onclick` → `onClick` (camelCase per tutti gli eventi)
- Tag self-closing devono avere la barra finale: `<img />`, `<br />`

### 2. Gestione dei Refs
Ogni sezione footer ha un ref React che permette di:
- Accedere all'elemento DOM reale
- Copiare l'HTML completo della sezione
- Mantenere la reattività React

```typescript
const sectionRef1 = useRef<HTMLElement>(null);

// Nell'HTML
<section ref={sectionRef1} className="...">
  {/* contenuto */}
</section>

// Nella funzione di copia
const el = sectionRef1.current;
if (el) {
  navigator.clipboard.writeText(el.outerHTML);
}
```

### 3. Sistema di Notifica
Il custom hook `useCopyNotification` gestisce:
- Stato della notifica (show/hide)
- Timer automatico per nascondere dopo 2 secondi
- Trigger per attivare la notifica

```typescript
// Nel file useCopyNotification.ts
"use client";
import { useState } from "react";

export function useCopyNotification(timeout = 2000) {
  const [show, setShow] = useState(false);
  
  const trigger = () => {
    setShow(true);
    setTimeout(() => setShow(false), timeout);
  };
  
  return [show, trigger];
}
```

### 4. Struttura di ogni Blocco
```jsx
<div className="relative">
  {/* Header con titolo e pulsante copia */}
  <SectionDivider title="Footer Block X">
    <Button onClick={() => handleCopy(sectionRefX)}>
      <Copy size={18} />
    </Button>
  </SectionDivider>
  
  {/* Sezione reale copiabile */}
  <section ref={sectionRefX} className="...">
    {/* Markup HTML/JSX del footer */}
  </section>
</div>
```

## Risoluzione Problemi Comuni

### Errore: "use client" directive must be placed before other expressions

**Causa:** La direttiva `"use client"` era posizionata nel mezzo del file o dopo altri statement.

**Soluzione:** 
```typescript
// ✅ CORRETTO
"use client";

import React from "react";
// ...resto degli import

// ❌ SBAGLIATO
import React from "react";

"use client";  // troppo tardi!
```

### Errore: You're importing a component that needs useState/useRef

**Causa:** File che usa React hooks ma non ha `"use client"` all'inizio.

**Soluzione:** Aggiungere `"use client"` sia al componente principale che agli hook custom:
```typescript
// useCopyNotification.ts
"use client";
import { useState } from "react";
// ...
```

### File Corrotto Durante il Patching

**Causa:** Tentativi multipli di patch hanno creato un file con sintassi invalida.

**Soluzione:** Rimuovere e ricreare il file da zero:
```powershell
Remove-Item "path/to/file.tsx" -Force
# Poi ricreare con create_file
```

## Workflow di Migrazione Completo

1. **Analizza l'HTML sorgente** (da `Tailwind2Blocks/Footer Blocks/index.html`)
2. **Identifica i blocchi footer** (ogni tag `<footer>` è un blocco separato)
3. **Crea la struttura base** del componente React con tutti i refs necessari
4. **Converti ogni blocco:**
   - Copia HTML → Incolla in JSX
   - Sostituisci `class` con `className`
   - Correggi attributi (onClick, etc.)
   - Aggiungi ref al tag `<section>`
   - Wrappa in `<div className="relative">` con `SectionDivider`
5. **Testa la funzionalità di copia** per ogni blocco
6. **Verifica la compilazione** Next.js senza errori

## Componenti Chiave Utilizzati

### Navigation
Header comune a tutte le pagine blocks

### Hero
Banner con titolo e sottotitolo della pagina

### SectionDivider
Componente che rende visivamente separati i blocchi con un titolo

### Button (shadcn/ui)
Componente button stilizzato per il pulsante copia

### useCopyNotification
Hook custom per gestire la notifica temporanea

## Best Practices

1. **Un ref per sezione**: Ogni blocco deve avere il proprio ref React
2. **Naming consistente**: `sectionRef1`, `sectionRef2`, etc.
3. **Direttiva "use client" in testa**: Sempre come prima riga del file
4. **Preservare le classi Tailwind**: Non modificare lo stile originale
5. **Accessibilità**: Mantenere gli `aria-label` sui pulsanti e link
6. **Testare la copia**: Verificare che ogni blocco si copi correttamente

## Estensioni Future

Per aggiungere nuovi blocchi footer:
1. Incrementa il numero del ref: `const sectionRef5 = useRef<HTMLElement>(null);`
2. Duplica la struttura di un blocco esistente
3. Aggiorna il ref e il titolo
4. Incolla il nuovo markup HTML/JSX
5. Testa la funzionalità di copia

---

**Risultato finale:** Una pagina completamente funzionale con 4 blocchi footer copiabili, interfaccia user-friendly e codice manutenibile e scalabile.

