## 📋 **Pull Request Description**

### **What does this PR do?**
<!-- Describe the changes made in this PR -->

### **Type of Change**
- [ ] 🐛 Bug fix (non-breaking change which fixes an issue)
- [ ] ✨ New feature (non-breaking change which adds functionality)
- [ ] 💥 Breaking change (fix or feature that would cause existing functionality to not work as expected)
- [ ] 📚 Documentation update
- [ ] 🎨 Style/UI improvements
- [ ] 🔧 Code refactoring (no functional changes)

### **Related Issues**
<!-- Link any related issues: Fixes #123, Closes #456 -->

---

## 🧪 **Testing Checklist**

### **Functionality Testing**
- [ ] All new features work as expected
- [ ] Existing functionality not broken
- [ ] Error handling works correctly
- [ ] Form validation working properly
- [ ] Toast notifications display correctly

### **UI/UX Testing**
- [ ] Responsive design tested (mobile/desktop)
- [ ] Modern simple cards with rounded borders
- [ ] No animations present (as per specs)
- [ ] Loading states work correctly
- [ ] Confirmation modals appear for destructive actions

### **Data & Limits Testing**
- [ ] Landing page limit (250) enforced
- [ ] Section limit (25 per page) enforced
- [ ] Button limit (3 per section) enforced
- [ ] Image limit (8 per section) enforced
- [ ] Database operations work correctly
- [ ] Export functionality tested

### **Code Quality**
- [ ] TypeScript compilation passes (`npm run typecheck`)
- [ ] ESLint passes (`npm run lint`)
- [ ] Code formatted with Prettier (`npm run format:write`)
- [ ] No console errors in browser
- [ ] Proper error boundaries implemented

---

## 📊 **Database Changes**

### **Schema Modifications**
- [ ] New migrations created if needed
- [ ] Migrations tested on clean database
- [ ] Backward compatibility considered
- [ ] Data integrity maintained

### **API Changes**
- [ ] New tRPC procedures follow existing patterns
- [ ] Proper error handling with TRPCError
- [ ] Input validation with Zod schemas
- [ ] Response types properly defined

---

## 📝 **Documentation Updates**

- [ ] README.md updated if needed
- [ ] CHANGES.md updated with new features/fixes
- [ ] Code comments added for complex logic
- [ ] TypeScript types properly documented

---

## 🚀 **Deployment Considerations**

- [ ] Environment variables documented
- [ ] Database migrations safe for production
- [ ] No breaking changes for existing users
- [ ] Performance impact considered

---

## 📸 **Screenshots** (if applicable)

<!-- Add screenshots of UI changes -->

---

## 💬 **Additional Notes**

<!-- Any additional context, concerns, or notes for reviewers -->

---

## ✅ **Reviewer Checklist**

### **Code Review**
- [ ] Code follows project conventions
- [ ] Logic is sound and efficient
- [ ] Security considerations addressed
- [ ] Performance impact acceptable

### **Testing Review**
- [ ] Test coverage adequate
- [ ] Edge cases considered
- [ ] Error scenarios handled
- [ ] Manual testing performed

### **Documentation Review**
- [ ] Code is self-documenting
- [ ] Complex logic explained
- [ ] API changes documented
- [ ] User-facing changes clear

---

**⚠️ Before merging:**
- [ ] All tests pass
- [ ] All reviewers approved
- [ ] No merge conflicts
- [ ] Branch is up to date with main