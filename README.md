## React Porfolio

### 셋팅 순서

- 명령어

```
# pnpm 설치
npm install -g pnpm

# vite 설치
pnpm create vite . --template react-ts

# pnpm 명령어 실행
pnpm install
pnpm run dev

# shadcn/ui 설치
pnpm install -D tailwindcss postcss autoprefixer
pnpm dlx tailwindcss init -p
```

- 이후 순서대로 진행
https://ui.shadcn.com/docs/installation/vite

```
pnpm i -D @types/node

pnpm dlx shadcn-ui@latest init  

√ Would you like to use TypeScript (recommended)? ... no / yes
√ Which style would you like to use? » New York
√ Which color would you like to use as base color? » Slate
√ Where is your global CSS file? ... src/style/globals.scss
√ Would you like to use CSS variables for colors? ... no / yes
√ Are you using a custom tailwind prefix eg. tw-? (Leave blank if not) ...     
√ Where is your tailwind.config.js located? ... tailwind.config.js
√ Configure the import alias for components: ... @/components
√ Configure the import alias for utils: ... @/lib/utils
√ Are you using React Server Components? ... no / yes
√ Write configuration to components.json. Proceed? ... yes

pnpm i -D sass
```
