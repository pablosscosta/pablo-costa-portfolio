const projects = [
  {
    id: 'jukebox-hub',
    title: 'Jukebox Hub',
    description:
      'Jukebox colaborativa integrada ao Spotify: o host toca a música no próprio dispositivo e os convidados escolhem a próxima faixa pelo celular, sem precisar de conta. Fila justa entre os convidados e atualização ao vivo em todos os celulares.',
    highlights: [
      'Fila justa: limite por pessoa e ninguém toca 3 músicas seguidas se outra pessoa está esperando.',
      'Tempo real com SSE e PostgreSQL LISTEN/NOTIFY, sem Redis.',
      'CI com lint, testes (RSpec e Vitest) e checagens de segurança em todo PR.',
    ],
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
      'Hospedado no plano gratuito do Render: o primeiro acesso pode levar até 1 minuto. Criar uma party exige uma conta do Spotify liberada na demo; convidados entram pelo link, sem conta.',
  },
]

export default projects
