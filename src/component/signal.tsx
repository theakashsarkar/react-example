import { signal } from '@preact/signals-react'
export const  count = signal(0);

export default function Example() {

    return (
        <>
            <div>
                Count: {count.value}
            </div>
        </>
    )
}