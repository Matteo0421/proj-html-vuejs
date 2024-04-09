	
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
  ]
})