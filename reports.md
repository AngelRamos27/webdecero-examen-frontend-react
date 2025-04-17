- Explica con tus palabras que es una API
  - **Una api es un medio por el cual podemos realizar una conexión entre herramientas, para acceder a datos, consultar, es un tipo de intermediario entre la información y un solicitante (nuestro sistema web).**

- En caso de haber utilizado un framework de estilos, justifica su uso y porque elegiste ese. 
  - **De hecho, tuve que realizar el repositorio desde cero, dado que el brindado era algo viejo y causaba bastantes incompatibilidades, no permitía utilizar ciertas herramientas como lo fue Tailwind CSS, que para mi es una de las mejores herramientas para estilizar webs, simple, rápido, usable, además de ello, lo elegí dado que es mi herramienta frontend principal durante todo mi tiempo desarrollando web. Como ultimo detalle añadí un componente de la librería shacdui, un dialog con una implementación sumamente rápida para mejorar la "experiencia" del usuario al momento de cerrar la sesión, la instalación de este tipo de componentes es muy rápida y son totalmente personalizables y reusables**

- En caso de haber utilizado un framework de estilos, justifica su uso y porque elegiste ese.
  - **Además usé de base NextJs (espero no haya problema), dado que la configuración de tailwind, entre el agregado de otras tecnologías es muy simple y rápido, configurable y personalizable, además de robusto. Quizá pude utilizar vite o Astro, pero me sentí más comodo usando Next dado que también la estructura de las rutas es sumamente cómoda y fácil de manejar. Quizá faltó implementar un middleware para manejar de mejor manera las rutas con la autenticación, pero al ser un proyecto pequeño de pruba, no lo vi necesario. Finalmente, trabajar con Next significa trabajar con Typescript, lo cual resulta mucho mejor que usar Javascript puro.** 

- En caso de haber utilizado un patron de componentes, justifica su uso y porque elegiste ese.
  - **Intenté trabajar con Clean Architecture, pero dado a ser un proyecto sin mucha dirección, quizá no se aplique mucho, misma intención de separar lógica de los componentes, así como el fetch, además de componentizar lo más posible los componentes para reducir el código repetido.**

- ¿Que patrones de diseno conoces?, cuales haz aplicado, explica porque lo utilizaste y como te ayudo a resolver un problema o tuvo una ventaja sobre otros.
  - **Conozco Clean Architecture, DDD, MVC, sin embargo en otros como (Factory Method,Abstract Factory,Singleton) no cuento con mucha experiencia, dado que en React, es un poco dificil integrar este tipo de patrones por la naturaleza misma de la librería.**
 
  **En el caso de Clean Architecture, me ha ayudado un montón a mantener orden en mis proyectos, a tenerlo mantenible y escalable dado a como se estructura de una manera tan atómica, así mismo DDD ayuda con lo mismo, pero de una manera mucho más profunda, dividiendo el dominio, el negocio, esto ayudandome como desarrollador a entender totalmente los procesos que se abstraen a la parte de código y clasificando cada sección del proyecto, ayudando a la mantenibilidad y escalabilidad del mismo.**


- ¿Haz utilizado Sockets?. Si es asi, explica el porque lo utilizaste y sus ventajas.
  - **Únicamente para un desarrollo simple de java, para un pequeño juego de "gato", esto ya hace 2 años, no cuento con mucha experiencia, pero podría investigar ya adaptarme.**