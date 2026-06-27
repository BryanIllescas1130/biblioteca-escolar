/*
 * ══════════════════════════════════════════════════════
 *  BIBLIOTECA ESCOLAR — Lista de libros
 *  Colegio Mixto Forjador de Juventudes · 2026
 * ══════════════════════════════════════════════════════
 *
 *  CÓMO AGREGAR UN LIBRO NUEVO:
 *  1. Copia uno de los bloques de abajo
 *  2. Pégalo al final de la lista (antes del ] final)
 *  3. Cambia los datos
 *  4. Guarda el archivo
 *  ¡Listo! El catálogo lo muestra automáticamente.
 *
 *  CAMPOS:
 *  codigo    → Código único  (ej. "NAR-08"). Usa el mismo formato.
 *  titulo    → Título completo del libro
 *  autor     → Nombre del autor
 *  categoria → Una de: AUT | CIE | CLA | JUV | MIS | NAR | VAR
 *  estado    → A | B | D | C  (estado físico del libro)
 *  paginas   → Número de páginas (solo el número, sin "págs.")
 *  year      → Año de publicación (opcional, escribe "" si no lo sabes)
 *  editorial → Editorial (opcional, escribe "" si no la sabes)
 *  isbn      → ISBN (opcional, escribe "" si no lo tienes)
 *  copias    → Número de copias disponibles (normalmente 1)
 *  descripcion → Descripción del libro SIN spoilers (2–3 oraciones)
 *  disponible  → true = se puede pedir prestado | false = no disponible
 *  nota        → Texto extra en rojo (ej. "Consultar disponibilidad").
 *                Deja "" si no hay nota especial.
 *
 * ══════════════════════════════════════════════════════
 */

const LIBROS = [

  /* ─────────────────────────────────────
   * AUTOAYUDA
   * ───────────────────────────────────── */
  {
    codigo:      "AUT-01",
    titulo:      "¿Amar o depender?",
    autor:       "Walter Riso",
    categoria:   "AUT",
    estado:      "A",
    paginas:     165,
    year:        2018,
    editorial:   "Planeta",
    isbn:        "9786070747489",
    copias:      1,
    disponible:  true,
    nota:        "",
    descripcion: "¿Es posible amar profundamente a alguien sin perder la propia identidad en el proceso? Riso explora la delgada línea entre el amor saludable y la dependencia emocional. Con lenguaje directo, invita a reflexionar sobre si nuestras relaciones nos hacen crecer o nos mantienen atrapados."
  },
  {
    codigo:      "AUT-02",
    titulo:      "Enamórate de ti",
    autor:       "Walter Riso",
    categoria:   "AUT",
    estado:      "D",
    paginas:     134,
    year:        2018,
    editorial:   "Planeta",
    isbn:        "9786070748356",
    copias:      1,
    disponible:  true,
    nota:        "",
    descripcion: "Antes de poder amar a alguien, hay que aprender a amarse a uno mismo. Riso propone un recorrido práctico para reconocer el valor propio y dejar atrás la autocrítica destructiva. Para quienes sienten que el mundo exterior siempre pesa más que su propia voz interior."
  },
  {
    codigo:      "AUT-03",
    titulo:      "20 pasos hacia adelante",
    autor:       "Jorge Bucay",
    categoria:   "AUT",
    estado:      "B",
    paginas:     177,
    year:        2019,
    editorial:   "Océano",
    isbn:        "9786075278087",
    copias:      1,
    disponible:  true,
    nota:        "",
    descripcion: "Bucay propone veinte reflexiones que funcionan como pequeñas palancas para mover la vida cuando uno siente que está estancado. Cada capítulo es un paso concreto, sin fórmulas mágicas. Un libro para leer de a poco y volver a él cada vez que se necesite un empujón."
  },
  {
    codigo:      "AUT-04",
    titulo:      "El rinoceronte I",
    autor:       "Scott Alexander",
    categoria:   "AUT",
    estado:      "D",
    paginas:     70,
    year:        "",
    editorial:   "",
    isbn:        "",
    copias:      1,
    disponible:  true,
    nota:        "",
    descripcion: "Un libro brevísimo con una sola idea poderosa: si quieres alcanzar tus metas, necesitas la piel gruesa de un rinoceronte para ignorar las críticas y su energía para no detenerte nunca. Se lee en una hora y puede cambiar cómo enfrentas los obstáculos."
  },
  {
    codigo:      "AUT-05",
    titulo:      "El rinoceronte II",
    autor:       "Scott Alexander",
    categoria:   "AUT",
    estado:      "B",
    paginas:     123,
    year:        "",
    editorial:   "Ediciones Botas",
    isbn:        "",
    copias:      1,
    disponible:  true,
    nota:        "",
    descripcion: "La continuación del fenómeno editorial de El rinoceronte. Más historias y más razones para seguir adelante cuando el mundo intenta frenarte. Alexander regresa con la misma filosofía práctica y directa de su primera entrega."
  },

  /* ─────────────────────────────────────
   * CIENCIA
   * ───────────────────────────────────── */
  {
    codigo:      "CIE-01",
    titulo:      "La teoría del todo",
    autor:       "Stephen W. Hawking",
    categoria:   "CIE",
    estado:      "A",
    paginas:     151,
    year:        2010,
    editorial:   "Debolsillo",
    isbn:        "9786073100311",
    copias:      1,
    disponible:  true,
    nota:        "",
    descripcion: "Una de las mentes más brillantes del siglo XX explica el universo sin fórmulas y sin dar por sentado que el lector es científico. Hawking va desde el Big Bang hasta los agujeros negros y llega a la gran pregunta: ¿existe una sola teoría que lo explique todo?"
  },
  {
    codigo:      "CIE-02",
    titulo:      "El libro de los porqués",
    autor:       "Pedro Gómez Carrizo",
    categoria:   "CIE",
    estado:      "A",
    paginas:     302,
    year:        2017,
    editorial:   "Biblok Book Export",
    isbn:        "9788494274732",
    copias:      1,
    disponible:  true,
    nota:        "",
    descripcion: "¿Por qué el cielo es azul? ¿Por qué soñamos? ¿Por qué los aviones vuelan? Este libro responde a las preguntas que todos hemos tenido alguna vez. Organizado para leerse en cualquier orden, ideal para la curiosidad que no sigue un horario."
  },

  /* ─────────────────────────────────────
   * CLÁSICOS
   * ───────────────────────────────────── */
  {
    codigo:      "CLA-01",
    titulo:      "La divina comedia",
    autor:       "Dante Alighieri",
    categoria:   "CLA",
    estado:      "A",
    paginas:     161,
    year:        "",
    editorial:   "Editorial Cuscatlán",
    isbn:        "",
    copias:      1,
    disponible:  true,
    nota:        "",
    descripcion: "Escrita en el siglo XIV, esta obra monumental narra el viaje imaginario de su autor a través del Infierno, el Purgatorio y el Paraíso. Considerada una de las cumbres absolutas de la literatura universal. Un retrato de la humanidad: sus miedos, sus esperanzas y su eterno anhelo de trascender."
  },
  {
    codigo:      "CLA-02",
    titulo:      "Don Quijote de la Mancha",
    autor:       "Miguel de Cervantes Saavedra",
    categoria:   "CLA",
    estado:      "D",
    paginas:     290,
    year:        "",
    editorial:   "Piedra Santa",
    isbn:        "",
    copias:      1,
    disponible:  true,
    nota:        "",
    descripcion: "La novela más importante escrita en español. Un hombre que ha leído demasiados libros de caballería decide convertirse en caballero andante y salir a enderezar los males del mundo. Una historia sobre los sueños, la locura y la diferencia entre lo que vemos y lo que queremos ver."
  },
  {
    codigo:      "CLA-03",
    titulo:      "El señor presidente",
    autor:       "Miguel Ángel Asturias",
    categoria:   "CLA",
    estado:      "D",
    paginas:     316,
    year:        "",
    editorial:   "Piedra Santa",
    isbn:        "",
    copias:      1,
    disponible:  true,
    nota:        "",
    descripcion: "Escrita por el único guatemalteco Premio Nobel de Literatura, esta novela retrata la brutalidad de una dictadura sin nombre pero con rostro muy reconocible. El miedo, la traición y el poder absoluto son los protagonistas reales. Imprescindible para entender la historia política de América Latina."
  },

  /* ─────────────────────────────────────
   * JUVENIL
   * ───────────────────────────────────── */
  {
    codigo:      "JUV-01",
    titulo:      "Guillero, el niño que hablaba con el mar",
    autor:       "Josué R. Álvarez",
    categoria:   "JUV",
    estado:      "A",
    paginas:     120,
    year:        "",
    editorial:   "Santillana",
    isbn:        "",
    copias:      1,
    disponible:  true,
    nota:        "",
    descripcion: "Guillero cree que el mar le habla. Lo que para los adultos es fantasía, para él es una conversación real que lo guía en los momentos más difíciles de su infancia. Una historia sobre la imaginación como forma de resistencia y aprender a escuchar lo que otros no pueden oír."
  },
  {
    codigo:      "JUV-02",
    titulo:      "La habitación de la memoria",
    autor:       "Denise Phé-Funchal",
    categoria:   "JUV",
    estado:      "A",
    paginas:     157,
    year:        "",
    editorial:   "Santillana",
    isbn:        "",
    copias:      1,
    disponible:  true,
    nota:        "",
    descripcion: "Una joven descubre que su abuela guarda secretos que nadie en la familia quiere tocar. Al adentrarse en su pasado, también se adentra en la historia de su propio país. Una novela guatemalteca que mezcla la búsqueda de identidad con la recuperación de la memoria colectiva."
  },
  {
    codigo:      "JUV-03",
    titulo:      "Los chimpancés miran a los ojos",
    autor:       "Andrea Ferrari",
    categoria:   "JUV",
    estado:      "D",
    paginas:     167,
    year:        "",
    editorial:   "Santillana",
    isbn:        "",
    copias:      1,
    disponible:  true,
    nota:        "",
    descripcion: "Cuando Lara llega a una nueva escuela se enfrenta al bullying. Lo que hace diferente a esta historia es que no se cuenta desde el lugar de la víctima, sino desde el de todos los que miran sin actuar. Una novela incómoda, necesaria y honesta sobre la complicidad del silencio."
  },
  {
    codigo:      "JUV-04",
    titulo:      "La caja de los sueños",
    autor:       "Paulina Losher",
    categoria:   "JUV",
    estado:      "B",
    paginas:     117,
    year:        "",
    editorial:   "Santillana",
    isbn:        "",
    copias:      1,
    disponible:  true,
    nota:        "",
    descripcion: "Cuando Tomás encuentra una caja vieja en el ático de su abuela, no imagina que dentro hay algo capaz de cambiar su manera de ver el mundo. Cada objeto tiene una historia. Una novela sobre el poder de los objetos que guardamos y lo que dicen de quiénes somos."
  },
  {
    codigo:      "JUV-05",
    titulo:      "Acualaxia",
    autor:       "Gabriel Woltke",
    categoria:   "JUV",
    estado:      "D",
    paginas:     134,
    year:        "",
    editorial:   "Santillana",
    isbn:        "",
    copias:      1,
    disponible:  true,
    nota:        "",
    descripcion: "En un mundo donde el agua es el recurso más valioso, una joven descubre que su ciudad entera está construida sobre una mentira. Un libro guatemalteco de narrativa especulativa que habla de nuestro tiempo usando el lenguaje del futuro."
  },
  {
    codigo:      "JUV-06",
    titulo:      "Las chicas de alambre",
    autor:       "Jordi Sierra i Fabra",
    categoria:   "JUV",
    estado:      "A",
    paginas:     251,
    year:        "",
    editorial:   "Santillana",
    isbn:        "",
    copias:      1,
    disponible:  true,
    nota:        "",
    descripcion: "Tres amigas, tres historias, un mismo fondo: la presión que ejerce la industria de la moda sobre los cuerpos jóvenes. Cada una lo enfrenta de manera diferente. Una novela que habla de amistad, imagen y salud sin caer en el sermón."
  },
  {
    codigo:      "JUV-07",
    titulo:      "El maestro y el robot",
    autor:       "José A. del Cañizo",
    categoria:   "JUV",
    estado:      "D",
    paginas:     140,
    year:        "",
    editorial:   "El barco de vapor",
    isbn:        "",
    copias:      1,
    disponible:  true,
    nota:        "",
    descripcion: "Un robot diseñado para enseñar matemáticas llega a una escuela rural. Entre sus algoritmos perfectos y la realidad desordenada del aula, algo inesperado ocurre: el robot comienza a aprender. Una historia sobre qué es realmente enseñar y si las máquinas pueden llegar a sentir."
  },
  {
    codigo:      "JUV-08",
    titulo:      "Eleanor & Park",
    autor:       "Rainbow Rowell",
    categoria:   "JUV",
    estado:      "B",
    paginas:     428,
    year:        2013,
    editorial:   "Alfaguara",
    isbn:        "9786701128645",
    copias:      1,
    disponible:  true,
    nota:        "",
    descripcion: "Dos adolescentes que no encajan en ningún lado se encuentran en el asiento trasero de un autobús escolar. Él comparte sus cómics. Ella empieza a leerlos. Una historia de amor sobre ser diferente y los primeros amores que nunca se olvidan del todo."
  },

  /* ─────────────────────────────────────
   * MISTERIO
   * ───────────────────────────────────── */
  {
    codigo:      "MIS-01",
    titulo:      "El extraño caso del Dr. Jekyll y Mr. Hyde",
    autor:       "Robert Louis Stevenson",
    categoria:   "MIS",
    estado:      "A",
    paginas:     95,
    year:        "",
    editorial:   "Emu",
    isbn:        "",
    copias:      1,
    disponible:  true,
    nota:        "",
    descripcion: "Un científico respetable, una fórmula secreta y una doble vida que nadie sospecha. Esta novela corta de 1886 plantea una de las preguntas más inquietantes de la literatura: ¿qué parte de nosotros somos cuando nadie nos ve? Un clásico del terror psicológico."
  },

  /* ─────────────────────────────────────
   * NARRATIVA
   * ───────────────────────────────────── */
  {
    codigo:      "NAR-01",
    titulo:      "El amor en los tiempos del cólera",
    autor:       "Gabriel García Márquez",
    categoria:   "NAR",
    estado:      "A",
    paginas:     464,
    year:        2015,
    editorial:   "Diana",
    isbn:        "9786070729164",
    copias:      1,
    disponible:  true,
    nota:        "",
    descripcion: "Un hombre espera más de cincuenta años por la mujer que ama. Mientras el mundo cambia y las guerras pasan, él no olvida. García Márquez explora si el amor verdadero puede sobrevivir al tiempo y a la propia vida. Considerada una de las mejores novelas de amor escritas en español."
  },
  {
    codigo:      "NAR-02",
    titulo:      "El coronel no tiene quien le escriba",
    autor:       "Gabriel García Márquez",
    categoria:   "NAR",
    estado:      "A",
    paginas:     0,
    year:        "",
    editorial:   "Oveja negra",
    isbn:        "9580600236",
    copias:      2,
    disponible:  true,
    nota:        "",
    descripcion: "Durante quince años, un coronel retirado ha esperado una carta del gobierno que le reconozca su pensión de guerra. Mientras espera, el hambre aprieta y el tiempo pasa. Una novela corta y perfecta sobre la dignidad y la obstinación como forma de sobrevivir."
  },
  {
    codigo:      "NAR-03",
    titulo:      "Leyendas de Guatemala",
    autor:       "Miguel Ángel Asturias",
    categoria:   "NAR",
    estado:      "D",
    paginas:     132,
    year:        "",
    editorial:   "",
    isbn:        "",
    copias:      1,
    disponible:  true,
    nota:        "",
    descripcion: "El primer libro del Nobel guatemalteco, nacido de la mitología maya y de la magia del altiplano. Recrea un mundo donde lo sagrado y lo cotidiano no tienen frontera. Una obra que es raíz, identidad y literatura al mismo tiempo."
  },
  {
    codigo:      "NAR-04",
    titulo:      "El tamagás y otros cuentos",
    autor:       "ALfredo Balsells Rivera",
    categoria:   "NAR",
    estado:      "D",
    paginas:     173,
    year:        "",
    editorial:   "Tipografía Nacional",
    isbn:        "",
    copias:      1,
    disponible:  true,
    nota:        "",
    descripcion: "Una colección de relatos enraizados en el campo guatemalteco. Historias de campesinos, tierra, injusticia y una naturaleza que a veces castiga y a veces protege. Literatura guatemalteca que todavía tiene mucho que decir."
  },
  {
    codigo:      "NAR-05",
    titulo:      "El animal de humo",
    autor:       "Humberto Ak'abal",
    categoria:   "NAR",
    estado:      "A",
    paginas:     120,
    year:        "",
    editorial:   "Piedra Santa",
    isbn:        "",
    copias:      1,
    disponible:  true,
    nota:        "",
    descripcion: "Ak'abal es el poeta k'iche' más reconocido de Guatemala. Sus poemas son cortos, directos y llenos de imágenes de la montaña, del maíz y de la memoria de un pueblo. Una poesía que no necesita ser difícil para ser profunda. Ideal para quienes creen que la poesía no es para ellos."
  },
  {
    codigo:      "NAR-06",
    titulo:      "Platero y Yo",
    autor:       "Juan Ramón Jiménez",
    categoria:   "NAR",
    estado:      "D",
    paginas:     95,
    year:        "",
    editorial:   "",
    isbn:        "",
    copias:      1,
    disponible:  true,
    nota:        "",
    descripcion: "Un poeta y su burro Platero recorren los campos de Andalucía. Lo que parece un libro para niños es en realidad una meditación sobre la belleza del mundo, la soledad y la muerte, escrita con una prosa que parece música. Premio Nobel de Literatura 1956."
  },
  {
    codigo:      "NAR-07",
    titulo:      "Guerra sin fin y otros relatos",
    autor:       "Plinio Eduardo Cortés",
    categoria:   "NAR",
    estado:      "A",
    paginas:     311,
    year:        "",
    editorial:   "",
    isbn:        "",
    copias:      1,
    disponible:  true,
    nota:        "⚠ Consultar disponibilidad con el responsable.",
    descripcion: "Una colección de relatos que exploran el conflicto armado guatemalteco desde perspectivas íntimas: no la del general ni la del político, sino la de las personas atrapadas en medio. Un testimonio literario de valor histórico."
  },

  /* ─────────────────────────────────────
   * VARIOS
   * ───────────────────────────────────── */
  {
    codigo:      "VAR-01",
    titulo:      "El jarrón azul",
    autor:       "Sin definir",
    categoria:   "VAR",
    estado:      "D",
    paginas:     42,
    year:        "",
    editorial:   "",
    isbn:        "",
    copias:      1,
    disponible:  true,
    nota:        "",
    descripcion: "Una historia breve sobre un jarrón azul que pasa de mano en mano, revelando poco a poco las vidas de quienes lo poseyeron. Un libro pequeño con una idea grande: los objetos guardan la memoria de las personas."
  },
  {
    codigo:      "VAR-02",
    titulo:      "Pasión Fútbol",
    autor:       "Jonathan Tulloch",
    categoria:   "VAR",
    estado:      "D",
    paginas:     275,
    year:        "",
    editorial:   "Alfaguara serie roja",
    isbn:        "",
    copias:      1,
    disponible:  true,
    nota:        "",
    descripcion: "Gemma no encaja en su nueva ciudad y no sabe qué hacer con su rabia. Hasta que descubre el fútbol, y con él, una comunidad de personas que tampoco encajan en ningún otro lado. Una novela sobre identidad y pertenencia que no necesita que te guste el fútbol para atraparte."
  },

  /*
   * ══════════════════════════════════════════════════════
   *  AGREGAR LIBROS NUEVOS AQUÍ ABAJO
   *  Copia este bloque y llena los datos:
   * ══════════════════════════════════════════════════════
   *
   * {
   *   codigo:      "NAR-08",        ← Siguiente número de la categoría
   *   titulo:      "Nombre del libro",
   *   autor:       "Nombre del autor",
   *   categoria:   "NAR",           ← AUT | CIE | CLA | JUV | MIS | NAR | VAR
   *   estado:      "A",             ← A | B | D | C
   *   paginas:     200,             ← Número (sin comillas)
   *   year:        2023,            ← Año (sin comillas, o "" si no lo sabes)
   *   editorial:   "Editorial",
   *   isbn:        "978...",        ← o "" si no lo tienes
   *   copias:      1,
   *   disponible:  true,
   *   nota:        "",
   *   descripcion: "Descripción sin spoilers del libro."
   * },
   *
   * ══════════════════════════════════════════════════════
   */

];
