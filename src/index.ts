import { interval, map } from 'rxjs'

const interval$ = interval(1000)

interval$.pipe(map((x) => x + 1))
