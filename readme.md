># JS-scope


### Область видимости в JavaScript относится к текущему контексту кода, который определяет доступность переменных для JavaScript. Два типа области видимости — локальные и глобальные. Глобальные переменные — это переменные, объявленные вне блока. Локальные переменные — это переменные, объявленные внутри блока.
![Alt text](./img/images.jpg)

># Type of scope 
### Область действия — это текущий контекст выполнения, в котором значения и выражения являются «видимыми» или на них можно ссылаться. Если переменная или выражение не находится в текущем область, он не будет доступен для использования. Области также могут быть многоуровневыми в иерархии, чтобы дочерние области имели доступ к родительским областям, но не наоборот.
![Alt text](./img/download.png)

## What is Global Scope?
### Говорят, что любая переменная, объявленная вне функции, имеет глобальную область действия.Проще говоря, переменная, к которой можно получить доступ в любом месте программы, называется переменной с глобальной областью действия. Переменные глобальной области действия можно определить с помощью любого из трех ключевых слов: let, const и var.
#### :-: Область по умолчанию для всего кода, выполняющегося в режиме сценария.

## What is Function Scope?
### При создании каждой новой функции в JavaScript создается новая область видимости. Вы не можете получить доступ к переменным, определенным внутри функции, снаружи функции или из другой функции. Var, let и const работают аналогично при использовании внутри функции.

#### :-: Область, созданная с помощью функции.

## What is Block Scope?
### При создании каждой новой функции в JavaScript создается новая область видимости. Вы не можете получить доступ к переменным, определенным внутри функции, снаружи функции или из другой функции. Var, let и const работают аналогично при использовании внутри функции.Область действия блока не работает с ключевым словом var. Для этого вы можете использовать ключевые слова let или const.

#### :-: Эта область действия ограничивает объявленную переменную.внутри определенного блока, от доступа снаружи блока.


># JS-hoisting

### Hoisting представляет процесс доступа к переменным до их определения. Возможно, данная концепция выглядит немного странно, но она связана с работой компилятора JavaScript. Компиляция кода происходит в два прохода. При первом проходе компилятор получает все объявления переменных, все идентификаторы.
![Alt text](./img/a1.png)

#### Поднятие (hoisting) — это поведение, при котором функцию или переменную можно использовать до объявления. Поднятие предполагает, что объявления переменных и функций физически перемещаются в начало кода — «поднимается». Например: // используем переменную test console.
#### Переменные объявленные через var всплывают (hoisting). Это значит, что если мы обратимся к переменной ещё до момента её инициализации, то получим undefined . У переменных let , const и var разная область видимости.

># TDZ
### Дословно «Временная мертвая зона». Переменная, объявленная с помощью let или const, не может быть доступна до ее объявления в пределах ее области видимости. Это вызовет ошибку ссылки или инициализации. Эта ситуация называется Temporal.
![Alt text](./img/tdz.png)

## Temporal Dead Zone JS - Временная мертвая зона JS
>### Объявлена ​​переменная сletorconst невозможно получить доступ пока не будет объявлено в пределах его объема.
>### Временная мертвая зона блока начинается в начале локальной области действия блока. Он заканчивается, когда компьютер полностью инициализирует вашу переменную значением.
>### Вы можете видеть, что первый код console.log в приведенном выше фрагменте вернул неопределенное значение.
>### JavaScript вернул неопределенное значение, поскольку мы не присвоили bestFood значение перед его использованием (вызовом). Таким образом, JavaScript по умолчанию присвоил своему значению неопределенное значение.
>### Имейте в виду, что вы должны указать значение константной переменной при ее объявлении. Помимо этого исключения, все остальные принципы временной мертвой зоны для переменных let применимы также и к const. Однако var работает по-другому.
 ![Alt text](./img/download.jpg)