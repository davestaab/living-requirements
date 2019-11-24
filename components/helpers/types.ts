export type Status = 'failed' | 'pending' | 'undefined' | 'skipped' | 'passed'

export interface Step {
  result: {
    status: Status
  }
}

export interface Summary {
  status: Status;
  count: number;
}
