import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root',
})
export class MockService implements InMemoryDbService {
  createDb() {
    let dashboards = [
      {
        id: 1,
        title: 'Dash 1',
        comps: [
          {
            id: 1,
            title: 'tab1',
            type: 'table',
            data: {
              headers: [
                'No.',
                'code',
                'frypot_id',
                'count',
                'date_time',
                'description',
                'action',
              ],
              rows: [
                ['1', 'E63', '4', '4', '22/07/01-08:23', 'cancelled recovery'],
                ['2', 'E63', '4', '4', '22/07/01-08:23', 'cancelled recovery'],
                ['3', 'E63', '4', '4', '22/07/01-08:23', 'cancelled recovery'],
                ['4', 'E63', '4', '4', '22/07/01-08:23', 'cancelled recovery'],
              ],
            },
          },
          { id: 2, title: 'tab2', type: 'chart' },
          {
            id: 3,
            title: 'tab3',
            type: 'form',
            data: {
              inputs: [
                {
                  id: 'email',
                  label: 'Email',
                  type: 'email',
                  description: "We'll never share your email with anyone else.",
                },
                {
                  id: 'user',
                  label: 'Username',
                  type: 'text',
                },
                {
                  id: 'user',
                  label: 'Check me out',
                  type: 'checkbox',
                },
              ],
            },
          },
          {
            id: 4,
            title: 'tab4',
            type: 'table',
            data: {
              headers: [
                'No.',
                'code',
                'frypot_id',
                'count',
                'date_time',
                'description',
                'action',
              ],
              rows: [
                ['1', 'E63', '4', '4', '22/07/01-08:23', 'cancelled recovery'],
                ['2', 'E63', '4', '4', '22/07/01-08:23', 'cancelled recovery'],
                ['3', 'E63', '4', '4', '22/07/01-08:23', 'cancelled recovery'],
                ['4', 'E63', '4', '4', '22/07/01-08:23', 'cancelled recovery'],
              ],
            },
          },
          { id: 5, title: 'tab5', type: 'chart' },
          {
            id: 6,
            title: 'tab6',
            type: 'form',
            data: {
              inputs: [
                {
                  id: 'email',
                  label: 'Email',
                  type: 'email',
                  description: "We'll never share your email with anyone else.",
                },
                {
                  id: 'user',
                  label: 'Username',
                  type: 'text',
                },
                {
                  id: 'user',
                  label: 'Check me out',
                  type: 'checkbox',
                },
              ],
            },
          },
        ],
      },
      {
        id: 2,
        title: 'Dash 2',
        comps: [
          {
            id: 1,
            title: 'tab1',
            type: 'table',
            data: {
              headers: [
                'No.',
                'code',
                'frypot_id',
                'count',
                'date_time',
                'description',
                'action',
              ],
              rows: [
                ['1', 'E63', '4', '4', '22/07/01-08:23', 'cancelled recovery'],
                ['2', 'E63', '4', '4', '22/07/01-08:23', 'cancelled recovery'],
                ['3', 'E63', '4', '4', '22/07/01-08:23', 'cancelled recovery'],
                ['4', 'E63', '4', '4', '22/07/01-08:23', 'cancelled recovery'],
              ],
            },
          },
          { id: 2, title: 'tab2', type: 'chart' },
          {
            id: 3,
            title: 'tab3',
            type: 'form',
            data: {
              inputs: [
                {
                  id: 'email',
                  label: 'Email',
                  type: 'email',
                  description: "We'll never share your email with anyone else.",
                },
                {
                  id: 'user',
                  label: 'Username',
                  type: 'text',
                },
                {
                  id: 'user',
                  label: 'Check me out',
                  type: 'checkbox',
                },
              ],
            },
          },
          {
            id: 4,
            title: 'tab4',
            type: 'table',
            data: {
              headers: [
                'No.',
                'code',
                'frypot_id',
                'count',
                'date_time',
                'description',
                'action',
              ],
              rows: [
                ['1', 'E63', '4', '4', '22/07/01-08:23', 'cancelled recovery'],
                ['2', 'E63', '4', '4', '22/07/01-08:23', 'cancelled recovery'],
                ['3', 'E63', '4', '4', '22/07/01-08:23', 'cancelled recovery'],
                ['4', 'E63', '4', '4', '22/07/01-08:23', 'cancelled recovery'],
              ],
            },
          },
          { id: 5, title: 'tab5', type: 'chart' },
          {
            id: 6,
            title: 'tab6',
            type: 'form',
            data: {
              inputs: [
                {
                  id: 'email',
                  label: 'Email',
                  type: 'email',
                  description: "We'll never share your email with anyone else.",
                },
                {
                  id: 'user',
                  label: 'Username',
                  type: 'text',
                },
                {
                  id: 'user',
                  label: 'Check me out',
                  type: 'checkbox',
                },
              ],
            },
          },
        ],
      },
      {
        id: 3,
        title: 'Dash 3',
        comps: [
          {
            id: 1,
            title: 'tab1',
            type: 'table',
            data: {
              headers: [
                'No.',
                'code',
                'frypot_id',
                'count',
                'date_time',
                'description',
                'action',
              ],
              rows: [
                ['1', 'E63', '4', '4', '22/07/01-08:23', 'cancelled recovery'],
                ['2', 'E63', '4', '4', '22/07/01-08:23', 'cancelled recovery'],
                ['3', 'E63', '4', '4', '22/07/01-08:23', 'cancelled recovery'],
                ['4', 'E63', '4', '4', '22/07/01-08:23', 'cancelled recovery'],
              ],
            },
          },
          { id: 2, title: 'tab2', type: 'chart' },
          {
            id: 3,
            title: 'tab3',
            type: 'form',
            data: {
              inputs: [
                {
                  id: 'email',
                  label: 'Email',
                  type: 'email',
                  description: "We'll never share your email with anyone else.",
                },
                {
                  id: 'user',
                  label: 'Username',
                  type: 'text',
                },
                {
                  id: 'user',
                  label: 'Check me out',
                  type: 'checkbox',
                },
              ],
            },
          },
          {
            id: 4,
            title: 'tab4',
            type: 'table',
            data: {
              headers: [
                'No.',
                'code',
                'frypot_id',
                'count',
                'date_time',
                'description',
                'action',
              ],
              rows: [
                ['1', 'E63', '4', '4', '22/07/01-08:23', 'cancelled recovery'],
                ['2', 'E63', '4', '4', '22/07/01-08:23', 'cancelled recovery'],
                ['3', 'E63', '4', '4', '22/07/01-08:23', 'cancelled recovery'],
                ['4', 'E63', '4', '4', '22/07/01-08:23', 'cancelled recovery'],
              ],
            },
          },
          { id: 5, title: 'tab5', type: 'chart' },
          {
            id: 6,
            title: 'tab6',
            type: 'form',
            data: {
              inputs: [
                {
                  id: 'email',
                  label: 'Email',
                  type: 'email',
                  description: "We'll never share your email with anyone else.",
                },
                {
                  id: 'user',
                  label: 'Username',
                  type: 'text',
                },
                {
                  id: 'user',
                  label: 'Check me out',
                  type: 'checkbox',
                },
              ],
            },
          },
        ],
      },
    ];
    return { dashboards };
  }
}
