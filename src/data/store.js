	
import { reactive } from 'vue'

export const store = reactive({
  CardsList: [
    {
      id: 1,
      img:'src/img/h5-custom-icon-1.png' ,
      title: 'Languages',
    },
    {
      id: 2,
      img:'src/img/h5-custom-icon-2.png' ,
      title: 'Software',
    },
    {
      id: 3,
      img:'src/img/h5-custom-icon-3.png' ,
      title:'Business' ,
    },
    {
      id: 4,
      img:'src/img/h5-custom-icon-4.png' ,
      title: 'Chemistry',
    },
    {
      id: 5,
      img:'src/img/h5-custom-icon-5.png' ,
      title:'Science' ,
    },
    {
      id: 6,
      img:'src/img/h5-custom-icon-6.png' ,
      title:'DIY&Craft' ,
    },
    
  ],

  CardsListCorses: [
    {
      id: 1,
      img: 'src/img/img-secondarie/course-7-f-img.jpg',
      title: 'Business English',
      author: 'Doris Crawford',
      descriptiom: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad numquam fugiat adipisci est perspiciatis saepe animi earum et dolorum cupiditate',
      number: 1,
      profession: 'PROGRAMMING',
    },
    {
      id: 2,
      img: 'src/img/img-secondarie/course-10-f-img.jpg',
      title: 'Associate Professor',
      author: 'Edward Bowman',
      descriptiom: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad numquam fugiat adipisci est perspiciatis saepe animi earum et dolorum cupiditate',
      number: 1,
      profession: 'PROFESSOR',
    },
    {
      id: 3,
      img: 'src/img/img-secondarie/course-6-f-img.jpg',
      title: 'Web Designing',
      author: 'Kevin Powell',
      descriptiom: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad numquam fugiat adipisci est perspiciatis saepe animi earum et dolorum cupiditate',
      number: 1,
      profession: 'PROGRAMMING',
    },
    {
      id: 4,
      img: 'src/img/img-secondarie/course-12-f-img.jpg',
      title: 'Financial Modelling',
      author: 'London',
      descriptiom: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad numquam fugiat adipisci est perspiciatis saepe animi earum et dolorum cupiditate',
      number: 1,
      profession: 'BUSINESS',
    },
    {
      id: 5,
      img: 'src/img/img-secondarie/course-5-f-img.jpg',
      title: 'Business Students',
      author: 'Doris Crawford',
      descriptiom: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad numquam fugiat adipisci est perspiciatis saepe animi earum et dolorum cupiditate',
      number: 1,
      profession: 'STUDENT',
    },
    {
      id: 6,
      img: 'src/img/img-secondarie/course-2-f-img.jpg',
      title: 'Informatic Students',
      author: 'John Crawford',
      descriptiom: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad numquam fugiat adipisci est perspiciatis saepe animi earum et dolorum cupiditate',
      number: 1,
      profession: 'STUDENT',
    },
  ],

  HeaderCarosel: [
    {
      id: 1,
      title: 'Contemporary Ideas',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error soluta inventore accusamus tenetur voluptate ex molestias et harum mollitia odio dolores, cumque eum delectus ipsam adipisci itaque, sapiente perferendis? Porro magni illo repudiandae modi sint cum alias dolorem dolor doloremque?',
    },
    {
      id: 2,
      title: 'Leaders in Learning',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error soluta inventore accusamus tenetur voluptate ex molestias et harum mollitia odio dolores, cumque eum delectus ipsam adipisci itaque, sapiente perferendis? Porro magni illo repudiandae modi sint cum alias dolorem dolor doloremque?',
    },
    {
      id: 3,
      title: 'Accelerate Your Career',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error soluta inventore accusamus tenetur voluptate ex molestias et harum mollitia odio dolores, cumque eum delectus ipsam adipisci itaque, sapiente perferendis? Porro magni illo repudiandae modi sint cum alias dolorem dolor doloremque?',
    },
    {
      id: 4,
      title: 'Build Your Futute',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error soluta inventore accusamus tenetur voluptate ex molestias et harum mollitia odio dolores, cumque eum delectus ipsam adipisci itaque, sapiente perferendis? Porro magni illo repudiandae modi sint cum alias dolorem dolor doloremque?',
    },
  ],

  BlueCarosel: [
    {
      id: 1,
      img: 'src/img/img-secondarie/testimonials-standard-1.png',
      descriptiom: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo praesentium ea dolore esse dicta recusandae nemo fuga mollitia sint nulla incidunt quod ipsam ab omnis eum soluta nostrum doloribus, unde consequatur quam repellat accusamus. Corporis quibusdam voluptatem praesentium amet odio omnis eveniet temporibus reprehenderit, mollitia tenetur magnam voluptas fugiat quos.',
      name: 'Joan Collins',
      status:'STUDENT',
    },
    {
      id: 2,
      img: 'src/img/img-secondarie/testimonials-standard-2.png',
      descriptiom: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo praesentium ea dolore esse dicta recusandae nemo fuga mollitia sint nulla incidunt quod ipsam ab omnis eum soluta nostrum doloribus, unde consequatur quam repellat accusamus. Corporis quibusdam voluptatem praesentium amet odio omnis eveniet temporibus reprehenderit, mollitia tenetur magnam voluptas fugiat quos.',
      name: 'Joan Collins',
      status:'STUDENT',
    },
    {
      id: 3,
      img: 'src/img/img-secondarie/testimonials-standard-3.png',
      descriptiom: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo praesentium ea dolore esse dicta recusandae nemo fuga mollitia sint nulla incidunt quod ipsam ab omnis eum soluta nostrum doloribus, unde consequatur quam repellat accusamus. Corporis quibusdam voluptatem praesentium amet odio omnis eveniet temporibus reprehenderit, mollitia tenetur magnam voluptas fugiat quos.',
      name: 'Joan Collins',
      status:'STUDENT',
    },
    {
      id: 4,
      img: 'src/img/img-secondarie/testimonials-standard-4.png',
      descriptiom: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo praesentium ea dolore esse dicta recusandae nemo fuga mollitia sint nulla incidunt quod ipsam ab omnis eum soluta nostrum doloribus, unde consequatur quam repellat accusamus. Corporis quibusdam voluptatem praesentium amet odio omnis eveniet temporibus reprehenderit, mollitia tenetur magnam voluptas fugiat quos.',
      name: 'Joan Collins',
      status:'STUDENT',
    },
    {
      id: 5,
      img: 'src/img/img-secondarie/testimonials-standard-5.png',
      descriptiom: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo praesentium ea dolore esse dicta recusandae nemo fuga mollitia sint nulla incidunt quod ipsam ab omnis eum soluta nostrum doloribus, unde consequatur quam repellat accusamus. Corporis quibusdam voluptatem praesentium amet odio omnis eveniet temporibus reprehenderit, mollitia tenetur magnam voluptas fugiat quos.',
      name: 'Joan Collins',
      status:'STUDENT',
    },
    {
      id: 6,
      img: 'src/img/img-secondarie/testimonials-standard-6.png',
      descriptiom: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo praesentium ea dolore esse dicta recusandae nemo fuga mollitia sint nulla incidunt quod ipsam ab omnis eum soluta nostrum doloribus, unde consequatur quam repellat accusamus. Corporis quibusdam voluptatem praesentium amet odio omnis eveniet temporibus reprehenderit, mollitia tenetur magnam voluptas fugiat quos.',
      name: 'Joan Collins',
      status:'STUDENT',
    },
  ]
})