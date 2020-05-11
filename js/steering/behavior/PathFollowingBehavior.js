import { SeekBehavior } from "./SeekBehavior";
import { VectorPool } from "../../core/VectorPool";

var vectorPool = new VectorPool(10);

var PathFollowingBehavior = function(steerable, options){
  SeekBehavior.call(this, steerable);

  this.path = options.path;
  this.satisfactionRadius = options.satisfactionRadius || 0;
}

PathFollowingBehavior.prototype = Object.create(SeekBehavior.prototype);

PathFollowingBehavior.prototype.compute = function(){
  this.result.linear.set(0, 0, 0);
  var steerable = this.steerable;
  var path = this.path;

  var currentWayPoint = path.getCurrentWaypoint();
  if (!currentWayPoint){
    return this.result;
  }

  var distance = vectorPool.get().copy(currentWayPoint).sub(steerable.position).getLength();

  if (distance <= this.satisfactionRadius){
    path.next();
    currentWayPoint = path.getCurrentWaypoint();
    
    if (!currentWayPoint){
      return this.result;
    }
  }

  steerable.setTargetPosition(currentWayPoint);
  return SeekBehavior.prototype.compute.call(this);
}

Object.defineProperty(PathFollowingBehavior.prototype, 'constructor', { value: PathFollowingBehavior,  enumerable: false, writable: true });
export { PathFollowingBehavior };
