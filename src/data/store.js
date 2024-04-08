	
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
    
  ]
})