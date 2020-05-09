import { SteeringBehavior } from "./SteeringBehavior";
import { VectorPool } from "../../core/VectorPool";

var vectorPool = new VectorPool(10);

var LookWhereYouAreGoingBehavior = function(steerable){
  SteeringBehavior.call(this, steerable);
}

LookWhereYouAreGoingBehavior.prototype = Object.create(SteeringBehavior.prototype);

LookWhereYouAreGoingBehavior.prototype.compute = function(){
  this.result.linear.set(0, 0, 0);

  var steerable = this.steerable;
  var target = vectorPool.get().copy(steerable.position).add(steerable.velocity);

  steerable.setLookTarget(target);
  
  return this.result;
}

Object.defineProperty(LookWhereYouAreGoingBehavior.prototype, 'constructor', { value: LookWhereYouAreGoingBehavior,  enumerable: false, writable: true });
export { LookWhereYouAreGoingBehavior };
