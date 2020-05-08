var Vector3D = function(x, y, z){
  this.x = x || 0;
  this.y = y || 0;
  this.z = z || 0;
}

Vector3D.prototype.set = function(x, y, z){
  this.x = x;
  this.y = y;
  this.z = z;
  return this;
}

Vector3D.prototype.copy = function(vect){
  return this.set(vect.x, vect.y, vect.z);
}

Vector3D.prototype.clone = function(){
  return (new Vector3D()).copy(this);
}

Vector3D.prototype.multiplyScalar = function(scalar){
  this.set(this.x * scalar, this.y * scalar, this.z * scalar);
  return this;
}

Vector3D.prototype.min = function(vect){
  this.x = Math.min(this.x, vect.x);
  this.y = Math.min(this.y, vect.y);
  this.z = Math.min(this.z, vect.z);

  return this;
}

Vector3D.prototype.max = function(vect){
  this.x = Math.max(this.x, vect.x);
  this.y = Math.max(this.y, vect.y);
  this.z = Math.max(this.z, vect.z);

  return this;
}

Vector3D.prototype.getLength = function(){
  return Math.sqrt((this.x * this.x) + (this.y * this.y) + (this.z * this.z));
}

Vector3D.prototype.add = function(vect){
  this.x += vect.x;
  this.y += vect.y;
  this.z += vect.z;

  return this;
}

Vector3D.prototype.sub = function(vect){
  this.x -= vect.x;
  this.y -= vect.y;
  this.z -= vect.z;

  return this;
}

Vector3D.prototype.normalize = function(){
  var len = this.getLength();
  if (len == 0){
    return this;
  }
  this.x = this.x / len;
  this.y = this.y / len;
  this.z = this.z / len;

  return this;
}

Vector3D.prototype.dot = function(vect){
  return (this.x * vect.x) + (this.y * vect.y) + (this.z * vect.z);
}

export { Vector3D };
