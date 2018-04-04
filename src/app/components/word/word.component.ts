import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.css']
})
export class WordComponent implements OnInit {
  
  english = '';
  vietnamese = '';
  add = false;
  filter = 'all';
  arr_words = [
    { id: 1, en: 'action', vi: 'hành động', memorized: true },
    { id: 2, en: 'actor', vi: 'diễn viên', memorized: false },
    { id: 3, en: 'activity', vi: 'hoạt động', memorized: true },
    { id: 4, en: 'active', vi: 'chủ động', memorized: true },
    { id: 5, en: 'bath', vi: 'tắm', memorized: false },
    { id: 6, en: 'bedroom', vi: 'phòng ngủ', memorized: true }
  ];
  add_word() {
    if(this.add) {
      if(this.english !== '' && this.vietnamese !== '') {
        this.arr_words.unshift({
          id: this.arr_words.length,
          en: this.english,
          vi: this.vietnamese,
          memorized: false
        });
        this.english = '';
        this.vietnamese = '';
        this.add = false;
      }
    }
    else {
      this.add = true;
    }
  }
  delete(id: number) {
    const index = this.arr_words.findIndex(word => word.id === id);
    this.arr_words.splice(index, 1);
  }
  filter_word(memorized: boolean) {
    const all = this.filter === 'all';
    const remember = this.filter === 'remember' && memorized;
    const forgot = this.filter === 'forgot' && !memorized;
    return all || remember || forgot;
  }

  constructor() { }

  ngOnInit() {
  }

}
