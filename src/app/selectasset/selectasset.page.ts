import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-selectasset',
  templateUrl: './selectasset.page.html',
  styleUrls: ['./selectasset.page.scss'],
})
export class SelectassetPage implements OnInit {
  chosenAsset = undefined;
  assets = [
    {
      id: 1,
      name: 'EV_01',
      company:'land',
      // eslint-disable-next-line @typescript-eslint/naming-convention
      Location: 'Cleveland, OH, USA, 44101',
    },
    {
      id: 2,
      name: 'EV_02',
      company:'land',
      // eslint-disable-next-line @typescript-eslint/naming-convention
      Location: 'Cleveland, OH, USA, 44101',
    },
    {
      id: 3,
      name: 'EV_03',
      company:'land',
      // eslint-disable-next-line @typescript-eslint/naming-convention
      Location: 'Cleveland, OH, USA, 44101',
    },
    {
      id: 4,
      name: 'EV_04',
      company:'land',
      // eslint-disable-next-line @typescript-eslint/naming-convention
      Location: 'Cleveland, OH, USA, 44101',
    },
    {
      id: 5,
      name: 'EV_05',
      company:'land',
      // eslint-disable-next-line @typescript-eslint/naming-convention
      Location: 'Cleveland, OH, USA, 44101',
    },
  ];
  constructor() { }

  compareWith(o1, o2) {
    if (!o1 || !o2) {
      return o1 === o2;
    }

    if (Array.isArray(o2)) {
      return o2.some((o) => o.id === o1.id);
    }

    return o1.id === o2.id;
  }

  handleChange(ev) {
    this.chosenAsset = ev.target.value;
  }


  ngOnInit() {
  }

}
