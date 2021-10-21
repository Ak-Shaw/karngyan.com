// Upload files in static/ So any file static/file.pdf -> /file.pdf is accessible at root

export default {
  name: 'ayush kumar shaw',
  domain: 'www.akshaw.dev', // add without https:// , used in meta tags and share urls
  image: '/images/akshawEmojified.png',
  email: 'ayushshawz@gmail.com',
  googleAnalyticsV4: {
    enabled: false,
    id: ''
  },
  plausibleAnalytics: {
    enabled: true,
    domain: 'www.akshaw.dev',
    trackLocalhost: false,
    // leave it empty if plausible is not self hosted
    apiHost: 'https://analytics.lookatx.dev' // default: https://plausible.io
  },
  // enable if you want comments and likes on posts
  // see how it looks on karngyan.com
  firebase: {
    enabled: true
  },
  social: {
    github: 'Ak-Shaw',
    linkedin: 'ayush-shaw',
    facebook: 'ayush.shaw.148',
    twitter: 'akshawz',
    instagram: 'akshawz',
    codestats: 'akshaw' // https://codestats.net make a profile if you dont already have one.
  },
  buyMeACoffee: {
    enabled: false,
    url: 'https://www.buymeacoffee.com/karngyan'
  },
  projects: {
    enabled: true,
  },
  blog: {
    enabled: true,
  },
  resume: {
    enabled: true,
    pdfUrl: '/RESUME_AYUSH_KUMAR_SHAW_DARK.pdf' // add files in static folder
  },
  uses: {
    enabled: true,
    meta: [
      {title: 'OS', value: 'Ubuntu Focal Fossa'},
      // {title: 'Memory', value: '16 GB 2667 MHz DDR4'},
      // {title: 'Keyboard', value: 'Keychron K2 - Gateron Brown Keys'},
      // {title: 'Mouse', value: 'Logitech Silent Pebble'},
      // {title: 'Monitor', value: 'LG QHD (2560 x 1440) 27 Inch IPS Display'},
      {title: 'Laptop • Processor • Graphics', value: 'HP ENVY x360 (13.3-inch, 2020) • 2.3 GHz with Turbo Boost Upto 4 GHz 8 MB L3 cache 6-Core 12 thread AMD Ryzen 5 Hexa Core • AMD Radeon™ Vega M Graphics'}
    ]
  },
  workedAt: {
    // add logos in static and at max add 3/4
    enabled: true,
    meta: [
      { name: 'Quizizz Inc.', src: '/images/quizizz.png', url: 'https://www.quizizz.com' },
      { name: 'Yellow Class', src: '/images/yellow-class.jpeg', url: 'https://www.yellowclass.com' },
      { name: 'JAROBLE', src: '/images/jaroble.png', url: 'https://www.jaroble.com' },
      { name: 'Crio.Do', src: '/images/crio.png', url: 'https://crio.do' },
    ]
  },
  recommendations: {
    enabled: true,
    meta: [
      { name: 'Mridula Sivanandan', designation: 'Software Engineer, Crio.Do', image: '/images/mridula-sivanandan.jpeg', linkedin: 'https://www.linkedin.com/in/mridulasivanandan/', content: 'Ayush is an enthusiastic engineer who is open to learning. Worked with him for 3 months and he is full of energy and a good coder.' },
      { name: 'Vinod Kumar Wagh', designation: 'SDE I, Grofers', image: '/images/vinod-kumar-wagh.jpeg', linkedin: 'https://www.linkedin.com/in/vinod-kumar-wagh/', content: 'Ayush and I worked together for over 6 months as student developers under Crio.Do. I thoroughly enjoyed working with Ayush and came to know him as a truly valuable asset to absolutely any team. He is honest and incredibly hard-working. Beyond that, he is an impressive problem solver who is always able to address complex issues with strategy and confidence. Along with his undeniable talent, Ayush has always been an absolute joy to work with. He is a true team player and always manages to encourage positive discussions and bring the best out of other team members. Keep up the good work Ayush.' },
    ]
  },
  loadingIndicator: {
    name: 'folding-cube'
    // https://tobiasahlin.com/spinkit/
    // circle
    // cube-grid
    // fading-circle
    // folding-cube
    // chasing-dots
    // nuxt
    // pulse
    // rectangle-bounce
    // rotating-plane
    // three-bounce
    // wandering-cubes
  },
  strings: {
    en_US: {
      download: 'download',
      nav: {
        home: 'home',
        blog: 'blog',
        projects: 'projects',
        uses: 'uses',
        resume: 'résumé',
        buyMeACoffee: 'buy me a beer',
        signIn: 'sign in',
        signOut: 'sign out'
      },
      hero: {
        iBlogTech: 'i blog tech',
        haveALook: 'have a look',
        friendlyNeighborhood: 'your friendly neighborhood',
        description: 'i am a software developer and a part time freelancer. i\'m into tech blogging and devoting some of my time to side projects.',
        words: ['developer', 'designer', 'engineer', 'programmer', 'code mentor'],
      },
      githubCalendar: {
        header: 'contributions',
        subtext: 'github calendar heatmap'
      },
      blog: {
        header: 'blog',
        subtext: 'i really love writing, but it does demand a chunk of my time. i\'m always open to feedback. i\'ll be happy to know your thoughts in comments or mail me at ayushshawz@gmail.com'
      },
      recentBlog: {
        header: 'recent blogs',
        subtext: 'i won\' lie, writing does take a ton of time!'
      },
      uses: {
        header: 'uses',
        subtext: 'a quick summary of what I use on a daily basis to code and some codestats.net flex'
      },
      projects: {
        header: 'projects',
        subtext: 'this page lists some of my personal and work projects. every project has some story, click on the title to read'
      },
      recommendations: {
        header: 'recommendations',
        subtext: 'what do my mentors say'
      }
    }
  }
}
