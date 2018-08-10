import Realm from 'realm'

// database
import TargetSchema from './d_targets'

const realm = new Realm({
  schema: [TargetSchema]
})

export default realm
