import { Subject } from 'rxjs'

const creation = {
  messageInput$:new Subject,
  keyboardSpacerHeight$:new Subject,
  futureMessageDate$:new Subject,
  showDatePicker$:new Subject,
  setMessageType$:new Subject,
}

// creation.futureMessageDate$.subscribe(()=>console.log('futureMessageDate'))
// creation.keyboardSpacerHeight$.subscribe(()=>console.log('keyboardSpacerHeight'))
// creation.showDatePicker$.subscribe(()=>console.log('showDatePicker'))
// creation.messageInput$.subscribe(()=>console.log('action date'))

export default creation
