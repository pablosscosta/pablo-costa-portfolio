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
    video: {
      src: '/projects/jukebox-hub-demo.mp4',
      poster: '/projects/jukebox-hub-demo.jpg',
      caption:
        'Demonstração simulada com dados fictícios: host no computador e convidado no celular. A música não toca de verdade.',
    },
    image: {
      src: '/projects/jukebox-hub.png',
      alt: 'Tela do host no Jukebox Hub: música tocando com capa e progresso, busca e próximas músicas da fila',
    },
    github: 'https://github.com/pablosscosta/jukebox-hub',
    demo: 'https://jukebox-hub-web.onrender.com',
    demoNote:
      'Hospedado no plano gratuito do Render: o primeiro acesso pode levar até 1 minuto. Criar uma party exige uma conta do Spotify liberada na demo; convidados entram pelo link, sem conta.',
  },
  {
    id: 'whatsapp-link-generator',
    title: 'WhatsApp Link Generator',
    description:
      'Gera um link e um QR code que abrem o WhatsApp com o número certo e uma mensagem pronta. Nasceu de um caso real: numa loja em que toda a equipe divide o mesmo WhatsApp, o cliente que vem pela divulgação de um atendente chega identificado.',
    highlights: [
      'Validação do número brasileiro (DDD, celular e fixo) e montagem do link em funções puras, com testes unitários.',
      'QR code em PNG e SVG, copiar o link e compartilhar direto do celular pela Web Share API.',
      'Começa sem backend de propósito: o Django só entra quando precisar contar cliques, decisão registrada em ADR.',
    ],
    technologies: [
      'React 19',
      'TypeScript',
      'Vite',
      'Web Share API',
      'GitHub Pages',
    ],
    category: 'FRONT END',
    featured: true,
    video: {
      src: '/projects/whatsapp-link-generator-demo.mp4',
      poster: '/projects/whatsapp-link-generator-demo.jpg',
      caption:
        'Demonstração com dados fictícios: o mesmo link gerado no computador e no celular.',
    },
    github: 'https://github.com/pablosscosta/whatsapp-link-generator',
    demo: 'https://pablosscosta.github.io/whatsapp-link-generator/',
  },
]

export default projects
