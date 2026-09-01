# Игры разума (Brain Games)

Консольные мини-игры на угадывание: игрок отвечает на 3 случайных вопроса
подряд, при первом неверном ответе игра прерывается.

- `brain-even` — чётное число или нет
- `brain-calc` — результат арифметического выражения
- `brain-gcd` — НОД двух чисел
- `brain-progression` — пропущенное число в арифметической прогрессии
- `brain-prime` — простое число или нет
- `brain-games` — запускает игру `even` по умолчанию

### Hexlet tests and linter status:
[![Actions Status](https://github.com/mikitasazan/backend-project-lvl1/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/mikitasazan/backend-project-lvl1/actions)

## Стек

- Node.js (ESM)
- readline-sync — синхронный ввод из консоли
- ESLint (`airbnb-base`)

## Использование

```bash
npm install
node bin/brain-even.js   # или bin/brain-calc.js, bin/brain-gcd.js,
                           # bin/brain-progression.js, bin/brain-prime.js
```

Либо `npm link`, чтобы получить глобальные команды `brain-even`, `brain-calc` и т.д.

```bash
npm run lint      # eslint .
npm test           # node --test
```
