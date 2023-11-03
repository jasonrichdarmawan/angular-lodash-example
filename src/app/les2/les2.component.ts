import { Component, OnInit } from '@angular/core';
import { ExperienceTopic } from '../entities/experience-topic';
import { TopicGrouping } from '../entities/topic-grouping';
import groupBy from 'lodash-es/groupBy';
import map from 'lodash-es/map';

@Component({
  selector: 'app-les2',
  templateUrl: './les2.component.html',
  styleUrls: ['./les2.component.scss']
})
export class Les2Component implements OnInit {
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
    this.topicGrouping = map(
      groupBy(this.experienceTopics, x => x.theme),
      (value, key) => ({ theme: key, themeIcon: value[0].themeIcon, topics: value })
    )

    console.log(this.topicGrouping)
  }
}
