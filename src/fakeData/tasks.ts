import { Task, TaskStatus, Priority } from 'utils/types';

export const TASKS: Task[] = [
   {
      id: 1,
      requestByUser: 1,
      projectId: 1,
      title: 'Task 1',
      notes: 'Task 1 of project 1 note',
      userId: 27,
      dueDate: '2021-10-09',
      status: TaskStatus.Reviewing,
      priority: Priority.Medium,
   },
   {
      id: 1,
      requestByUser: 1,
      projectId: 1,
      title: 'Task 2',
      notes: 'Task 2 of project 1 note',
      userId: 27,
      dueDate: '2021-10-09',
      status: TaskStatus.Completed,
      priority: Priority.High,
   },
   {
      id: 2,
      requestByUser: 1,
      projectId: 1,
      title: 'Task 3',
      notes: 'Task 3 of project 1 note',
      userId: 27,
      dueDate: '2021-10-09',
      status: TaskStatus.Reviewing,
      priority: Priority.Medium,
   },
   {
      id: 3,
      requestByUser: 1,
      projectId: 1,
      title: 'Task 4',
      notes: 'Task 4 of project 1 note',
      userId: 27,
      dueDate: '2021-10-09',
      status: TaskStatus.Reviewing,
      priority: Priority.Medium,
   },
   {
      id: 4,
      requestByUser: 1,
      projectId: 1,
      title: 'Task 5',
      notes: 'Task 5 of project 1 note',
      userId: 27,
      dueDate: '2021-10-09',
      status: TaskStatus.Completed,
      priority: Priority.Medium,
   },
   {
      id: 5,
      requestByUser: 2,
      projectId: 2,
      title: 'Task 1',
      notes: 'Task 1 of project 2 note',
      userId: 19,
      dueDate: '2021-10-09',
      status: TaskStatus.Unscheduled,
      priority: Priority.Medium,
   },
   {
      id: 6,
      requestByUser: 2,
      projectId: 2,
      title: 'Task 2',
      notes: 'Task 2 of project 2 note',
      userId: 2,
      dueDate: '2021-10-09',
      status: TaskStatus.Reviewing,
      priority: Priority.High,
   },
   {
      id: 7,
      requestByUser: 2,
      projectId: 2,
      title: 'Task 3',
      notes: 'Task 3 of project 2 note',
      userId: 23,
      dueDate: '2021-10-09',
      status: TaskStatus.Reviewing,
      priority: Priority.High,
   },
   {
      id: 8,
      requestByUser: 2,
      projectId: 2,
      title: 'Task 4',
      notes: 'Task 4 of project 2 note',
      userId: 23,
      dueDate: '2021-10-09',
      status: TaskStatus.Reviewing,
      priority: Priority.High,
   },
   {
      id: 9,
      requestByUser: 2,
      projectId: 2,
      title: 'Task 5',
      notes: 'Task 5 of project 2 note',
      userId: 19,
      dueDate: '2021-10-09',
      status: TaskStatus.Requesting,
      priority: Priority.High,
   },
   {
      id: 10,
      requestByUser: 3,
      projectId: 3,
      title: 'Task 1',
      notes: 'Task 1 of project 3 note',
      userId: 16,
      dueDate: '2021-10-09',
      status: TaskStatus.Completed,
      priority: Priority.Medium,
   },
   {
      id: 11,
      requestByUser: 3,
      projectId: 3,
      title: 'Task 2',
      notes: 'Task 2 of project 3 note',
      userId: 15,
      dueDate: '2021-10-09',
      status: TaskStatus.Requesting,
      priority: Priority.High,
   },
   {
      id: 12,
      requestByUser: 3,
      projectId: 3,
      title: 'Task 3',
      notes: 'Task 3 of project 3 note',
      userId: 3,
      dueDate: '2021-10-09',
      status: TaskStatus.Cancelled,
      priority: Priority.High,
   },
   {
      id: 13,
      requestByUser: 3,
      projectId: 3,
      title: 'Task 4',
      notes: 'Task 4 of project 3 note',
      userId: 15,
      dueDate: '2021-10-09',
      status: TaskStatus.Unscheduled,
      priority: Priority.Medium,
   },
   {
      id: 14,
      requestByUser: 3,
      projectId: 3,
      title: 'Task 5',
      notes: 'Task 5 of project 3 note',
      userId: 3,
      dueDate: '2021-10-09',
      status: TaskStatus.Doing,
      priority: Priority.Medium,
   },
   {
      id: 15,
      requestByUser: 4,
      projectId: 4,
      title: 'Task 1',
      notes: 'Task 1 of project 4 note',
      userId: 4,
      dueDate: '2021-10-09',
      status: TaskStatus.Unscheduled,
      priority: Priority.High,
   },
   {
      id: 16,
      requestByUser: 4,
      projectId: 4,
      title: 'Task 2',
      notes: 'Task 2 of project 4 note',
      userId: 4,
      dueDate: '2021-10-09',
      status: TaskStatus.Reviewing,
      priority: Priority.Medium,
   },
   {
      id: 17,
      requestByUser: 4,
      projectId: 4,
      title: 'Task 3',
      notes: 'Task 3 of project 4 note',
      userId: 4,
      dueDate: '2021-10-09',
      status: TaskStatus.Cancelled,
      priority: Priority.Medium,
   },
   {
      id: 18,
      requestByUser: 4,
      projectId: 4,
      title: 'Task 4',
      notes: 'Task 4 of project 4 note',
      userId: 27,
      dueDate: '2021-10-09',
      status: TaskStatus.Cancelled,
      priority: Priority.High,
   },
   {
      id: 19,
      requestByUser: 4,
      projectId: 4,
      title: 'Task 5',
      notes: 'Task 5 of project 4 note',
      userId: 27,
      dueDate: '2021-10-09',
      status: TaskStatus.Doing,
      priority: Priority.Medium,
   },
   {
      id: 20,
      requestByUser: 5,
      projectId: 5,
      title: 'Task 1',
      notes: 'Task 1 of project 5 note',
      userId: 26,
      dueDate: '2021-10-09',
      status: TaskStatus.Unscheduled,
      priority: Priority.High,
   },
   {
      id: 21,
      requestByUser: 5,
      projectId: 5,
      title: 'Task 2',
      notes: 'Task 2 of project 5 note',
      userId: 31,
      dueDate: '2021-10-09',
      status: TaskStatus.Unscheduled,
      priority: Priority.High,
   },
   {
      id: 22,
      requestByUser: 5,
      projectId: 5,
      title: 'Task 3',
      notes: 'Task 3 of project 5 note',
      userId: 14,
      dueDate: '2021-10-09',
      status: TaskStatus.Completed,
      priority: Priority.High,
   },
   {
      id: 23,
      requestByUser: 5,
      projectId: 5,
      title: 'Task 4',
      notes: 'Task 4 of project 5 note',
      userId: 31,
      dueDate: '2021-10-09',
      status: TaskStatus.Cancelled,
      priority: Priority.Medium,
   },
   {
      id: 24,
      requestByUser: 5,
      projectId: 5,
      title: 'Task 5',
      notes: 'Task 5 of project 5 note',
      userId: 26,
      dueDate: '2021-10-09',
      status: TaskStatus.Reviewing,
      priority: Priority.Medium,
   },
   {
      id: 25,
      requestByUser: 6,
      projectId: 6,
      title: 'Task 1',
      notes: 'Task 1 of project 6 note',
      userId: 6,
      dueDate: '2021-10-09',
      status: TaskStatus.Completed,
      priority: Priority.Medium,
   },
   {
      id: 26,
      requestByUser: 6,
      projectId: 6,
      title: 'Task 2',
      notes: 'Task 2 of project 6 note',
      userId: 13,
      dueDate: '2021-10-09',
      status: TaskStatus.Doing,
      priority: Priority.Medium,
   },
   {
      id: 27,
      requestByUser: 6,
      projectId: 6,
      title: 'Task 3',
      notes: 'Task 3 of project 6 note',
      userId: 21,
      dueDate: '2021-10-09',
      status: TaskStatus.Doing,
      priority: Priority.Medium,
   },
   {
      id: 28,
      requestByUser: 6,
      projectId: 6,
      title: 'Task 4',
      notes: 'Task 4 of project 6 note',
      userId: 15,
      dueDate: '2021-10-09',
      status: TaskStatus.Reviewing,
      priority: Priority.Medium,
   },
   {
      id: 29,
      requestByUser: 6,
      projectId: 6,
      title: 'Task 5',
      notes: 'Task 5 of project 6 note',
      userId: 15,
      dueDate: '2021-10-09',
      status: TaskStatus.Reviewing,
      priority: Priority.High,
   },
   {
      id: 30,
      requestByUser: 7,
      projectId: 7,
      title: 'Task 1',
      notes: 'Task 1 of project 7 note',
      userId: 23,
      dueDate: '2021-10-09',
      status: TaskStatus.Doing,
      priority: Priority.High,
   },
   {
      id: 31,
      requestByUser: 7,
      projectId: 7,
      title: 'Task 2',
      notes: 'Task 2 of project 7 note',
      userId: 7,
      dueDate: '2021-10-09',
      status: TaskStatus.Unscheduled,
      priority: Priority.High,
   },
   {
      id: 32,
      requestByUser: 7,
      projectId: 7,
      title: 'Task 3',
      notes: 'Task 3 of project 7 note',
      userId: 23,
      dueDate: '2021-10-09',
      status: TaskStatus.Requesting,
      priority: Priority.Medium,
   },
   {
      id: 33,
      requestByUser: 7,
      projectId: 7,
      title: 'Task 4',
      notes: 'Task 4 of project 7 note',
      userId: 13,
      dueDate: '2021-10-09',
      status: TaskStatus.Completed,
      priority: Priority.Medium,
   },
   {
      id: 34,
      requestByUser: 7,
      projectId: 7,
      title: 'Task 5',
      notes: 'Task 5 of project 7 note',
      userId: 7,
      dueDate: '2021-10-09',
      status: TaskStatus.Completed,
      priority: Priority.High,
   },
   {
      id: 35,
      requestByUser: 8,
      projectId: 8,
      title: 'Task 1',
      notes: 'Task 1 of project 8 note',
      userId: 14,
      dueDate: '2021-10-09',
      status: TaskStatus.Completed,
      priority: Priority.Medium,
   },
   {
      id: 36,
      requestByUser: 8,
      projectId: 8,
      title: 'Task 2',
      notes: 'Task 2 of project 8 note',
      userId: 16,
      dueDate: '2021-10-09',
      status: TaskStatus.Requesting,
      priority: Priority.Medium,
   },
   {
      id: 37,
      requestByUser: 8,
      projectId: 8,
      title: 'Task 3',
      notes: 'Task 3 of project 8 note',
      userId: 14,
      dueDate: '2021-10-09',
      status: TaskStatus.Doing,
      priority: Priority.Medium,
   },
   {
      id: 38,
      requestByUser: 8,
      projectId: 8,
      title: 'Task 4',
      notes: 'Task 4 of project 8 note',
      userId: 8,
      dueDate: '2021-10-09',
      status: TaskStatus.Completed,
      priority: Priority.High,
   },
   {
      id: 39,
      requestByUser: 8,
      projectId: 8,
      title: 'Task 5',
      notes: 'Task 5 of project 8 note',
      userId: 20,
      dueDate: '2021-10-09',
      status: TaskStatus.Requesting,
      priority: Priority.Medium,
   },
   {
      id: 40,
      requestByUser: 9,
      projectId: 9,
      title: 'Task 1',
      notes: 'Task 1 of project 9 note',
      userId: 28,
      dueDate: '2021-10-09',
      status: TaskStatus.Completed,
      priority: Priority.High,
   },
   {
      id: 41,
      requestByUser: 9,
      projectId: 9,
      title: 'Task 2',
      notes: 'Task 2 of project 9 note',
      userId: 28,
      dueDate: '2021-10-09',
      status: TaskStatus.Cancelled,
      priority: Priority.High,
   },
   {
      id: 42,
      requestByUser: 9,
      projectId: 9,
      title: 'Task 3',
      notes: 'Task 3 of project 9 note',
      userId: 12,
      dueDate: '2021-10-09',
      status: TaskStatus.Requesting,
      priority: Priority.Medium,
   },
   {
      id: 43,
      requestByUser: 9,
      projectId: 9,
      title: 'Task 4',
      notes: 'Task 4 of project 9 note',
      userId: 19,
      dueDate: '2021-10-09',
      status: TaskStatus.Unscheduled,
      priority: Priority.High,
   },
   {
      id: 44,
      requestByUser: 9,
      projectId: 9,
      title: 'Task 5',
      notes: 'Task 5 of project 9 note',
      userId: 19,
      dueDate: '2021-10-09',
      status: TaskStatus.Unscheduled,
      priority: Priority.Medium,
   },
];