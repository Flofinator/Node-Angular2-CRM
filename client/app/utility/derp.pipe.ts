import { Pipe } from 'angular2/core'

@Pipe({ name: 'derp' })
export class DerpPipe {
  transform (value, args) {
    return Array.from(value);
  }
}