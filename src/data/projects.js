const projects = [
  {
    id: 'jukebox-hub',
    title: 'Jukebox Hub',
    description:
      'Jukebox colaborativa integrada ao Spotify: o host toca a música no próprio dispositivo e os convidados escolhem a próxima faixa pelo celular, sem precisar de conta. Fila justa entre os convidados e atualização ao vivo em todos os celulares.',
    technologies: [
      'Ruby on Rails 8.1',
      'React 19',
      'TypeScript',
      'PostgreSQL',
      'SSE',
      'Spotify API',
    ],
    category: 'FULL STACK',
    featured: true,
    image: {
      src: '/projects/jukebox-hub.png',
      alt: 'Tela do host no Jukebox Hub: música tocando com capa e progresso, busca e próximas músicas da fila',
    },
    github: 'https://github.com/pablosscosta/jukebox-hub',
    demo: 'https://jukebox-hub-web.onrender.com',
    demoNote:
      'Hospedado no plano gratuito do Render: o primeiro acesso pode levar até 1 minuto.',
  },
]

export default projects
