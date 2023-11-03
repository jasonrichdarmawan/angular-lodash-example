import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { ExperienceTopic } from '../entities/experience-topic';
import { TopicGrouping } from '../entities/topic-grouping';

@Component({
  selector: 'app-l1',
  templateUrl: './l1.component.html',
  styleUrls: ['./l1.component.scss']
})
export class L1Component implements OnInit {
  experienceTopics: ExperienceTopic[];
  topicGrouping: TopicGrouping[]

  constructor() {
    this.experienceTopics = [
      {
        theme: 'theme1',
        topic: 'topic1',
        themeIcon: 'themeIcon1',
      },
      {
        theme: 'theme1',
        topic: 'topic2',
        themeIcon: 'themeIcon1',
      },
      {
        theme: 'theme2',
        topic: 'topic2',
        themeIcon: 'themeIcon2',
      },
    ];
    this.topicGrouping = []
  }

  ngOnInit(): void {
    this.topicGrouping = _(this.experienceTopics)
      .groupBy(x => x.theme)
      .map((value, key) => ({ theme: key, themeIcon: value[0].themeIcon, topics: value }))
      .value();

    console.log(this.topicGrouping)
  }
}
