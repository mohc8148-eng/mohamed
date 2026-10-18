# React + Vite

## بنية المشروع

```text
src/
├── assets/                  # الصور والشعارات
├── app/
│   └── AppRouter.jsx         # يقرأ المسار ويعرض الصفحة المناسبة
├── components/              # مكوّنات الواجهة القابلة لإعادة الاستخدام
│   ├── HeroVisual.jsx        # الرسم والشعارات في أعلى الصفحة
│   ├── NextStepsSection.jsx  # قسم التوثيق وروابط المجتمع
│   ├── ResourceCard.jsx      # بطاقة روابط قابلة لإعادة الاستخدام
│   └── StarterSection.jsx    # عنوان البداية والعداد
├── layouts/
│   └── MainLayout.jsx        # الهيكل المشترك للصفحات
├── pages/
│   ├── HomePage.jsx          # الصفحة الرئيسية
│   └── NotFoundPage.jsx      # صفحة المسار غير الموجود
├── routes/
│   └── index.jsx             # تعريف المسارات
├── App.css                   # تنسيقات مكوّنات التطبيق
├── index.css                 # التنسيقات العامة والمتغيرات
└── main.jsx                  # نقطة تشغيل React، ومنها يبدأ AppRouter
```

لإضافة صفحة، أنشئي مكوّناً داخل `pages/` ثم أضيفي مساره في `routes/index.jsx`.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.
You can also try [the experimental native React Compiler support in plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md#rust-react-compiler) by using `compiler: true` in the plugin options instead of using the Babel plugin.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
