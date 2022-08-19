import enchaptrs from '../data/quran-id.json'

export default class ChaptEnService {

  static getEnChapters() {
    return enchaptrs.map((chapter) => ({
      id: chapter['-index'],
      nameAr: chapter['-name'],
      vers:chapter.aya.map((en)=>{
        ida:en['-index']
        text:en['-text']
      }),
     
      
    }))
  }

}