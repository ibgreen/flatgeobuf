// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

import { GeometryType } from '../flat-geobuf/geometry-type.js';


export class Geometry {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
__init(i:number, bb:flatbuffers.ByteBuffer):Geometry {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsGeometry(bb:flatbuffers.ByteBuffer, obj?:Geometry):Geometry {
  return (obj || new Geometry()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsGeometry(bb:flatbuffers.ByteBuffer, obj?:Geometry):Geometry {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new Geometry()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

ends(index: number):number|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.readUint32(this.bb!.__vector(this.bb_pos + offset) + index * 4) : 0;
}

endsLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

endsArray():Uint32Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? new Uint32Array(this.bb!.bytes().buffer, this.bb!.bytes().byteOffset + this.bb!.__vector(this.bb_pos + offset), this.bb!.__vector_len(this.bb_pos + offset)) : null;
}

xy(index: number):number|null {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.readFloat64(this.bb!.__vector(this.bb_pos + offset) + index * 8) : 0;
}

xyLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

xyArray():Float64Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? new Float64Array(this.bb!.bytes().buffer, this.bb!.bytes().byteOffset + this.bb!.__vector(this.bb_pos + offset), this.bb!.__vector_len(this.bb_pos + offset)) : null;
}

z(index: number):number|null {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? this.bb!.readFloat64(this.bb!.__vector(this.bb_pos + offset) + index * 8) : 0;
}

zLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

zArray():Float64Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? new Float64Array(this.bb!.bytes().buffer, this.bb!.bytes().byteOffset + this.bb!.__vector(this.bb_pos + offset), this.bb!.__vector_len(this.bb_pos + offset)) : null;
}

m(index: number):number|null {
  const offset = this.bb!.__offset(this.bb_pos, 10);
  return offset ? this.bb!.readFloat64(this.bb!.__vector(this.bb_pos + offset) + index * 8) : 0;
}

mLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 10);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

mArray():Float64Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 10);
  return offset ? new Float64Array(this.bb!.bytes().buffer, this.bb!.bytes().byteOffset + this.bb!.__vector(this.bb_pos + offset), this.bb!.__vector_len(this.bb_pos + offset)) : null;
}

t(index: number):number|null {
  const offset = this.bb!.__offset(this.bb_pos, 12);
  return offset ? this.bb!.readFloat64(this.bb!.__vector(this.bb_pos + offset) + index * 8) : 0;
}

tLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 12);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

tArray():Float64Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 12);
  return offset ? new Float64Array(this.bb!.bytes().buffer, this.bb!.bytes().byteOffset + this.bb!.__vector(this.bb_pos + offset), this.bb!.__vector_len(this.bb_pos + offset)) : null;
}

tm(index: number):bigint|null {
  const offset = this.bb!.__offset(this.bb_pos, 14);
  return offset ? this.bb!.readUint64(this.bb!.__vector(this.bb_pos + offset) + index * 8) : BigInt(0);
}

tmLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 14);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

type():GeometryType {
  const offset = this.bb!.__offset(this.bb_pos, 16);
  return offset ? this.bb!.readUint8(this.bb_pos + offset) : GeometryType.Unknown;
}

parts(index: number, obj?:Geometry):Geometry|null {
  const offset = this.bb!.__offset(this.bb_pos, 18);
  return offset ? (obj || new Geometry()).__init(this.bb!.__indirect(this.bb!.__vector(this.bb_pos + offset) + index * 4), this.bb!) : null;
}

partsLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 18);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

static startGeometry(builder:flatbuffers.Builder) {
  builder.startObject(8);
}

static addEnds(builder:flatbuffers.Builder, endsOffset:flatbuffers.Offset) {
  builder.addFieldOffset(0, endsOffset, 0);
}

static createEndsVector(builder:flatbuffers.Builder, data:number[]|Uint32Array):flatbuffers.Offset;
/**
 * @deprecated This Uint8Array overload will be removed in the future.
 */
static createEndsVector(builder:flatbuffers.Builder, data:number[]|Uint8Array):flatbuffers.Offset;
static createEndsVector(builder:flatbuffers.Builder, data:number[]|Uint32Array|Uint8Array):flatbuffers.Offset {
  builder.startVector(4, data.length, 4);
  for (let i = data.length - 1; i >= 0; i--) {
    builder.addInt32(data[i]!);
  }
  return builder.endVector();
}

static startEndsVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(4, numElems, 4);
}

static addXy(builder:flatbuffers.Builder, xyOffset:flatbuffers.Offset) {
  builder.addFieldOffset(1, xyOffset, 0);
}

static createXyVector(builder:flatbuffers.Builder, data:number[]|Float64Array):flatbuffers.Offset;
/**
 * @deprecated This Uint8Array overload will be removed in the future.
 */
static createXyVector(builder:flatbuffers.Builder, data:number[]|Uint8Array):flatbuffers.Offset;
static createXyVector(builder:flatbuffers.Builder, data:number[]|Float64Array|Uint8Array):flatbuffers.Offset {
  builder.startVector(8, data.length, 8);
  for (let i = data.length - 1; i >= 0; i--) {
    builder.addFloat64(data[i]!);
  }
  return builder.endVector();
}

static startXyVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(8, numElems, 8);
}

static addZ(builder:flatbuffers.Builder, zOffset:flatbuffers.Offset) {
  builder.addFieldOffset(2, zOffset, 0);
}

static createZVector(builder:flatbuffers.Builder, data:number[]|Float64Array):flatbuffers.Offset;
/**
 * @deprecated This Uint8Array overload will be removed in the future.
 */
static createZVector(builder:flatbuffers.Builder, data:number[]|Uint8Array):flatbuffers.Offset;
static createZVector(builder:flatbuffers.Builder, data:number[]|Float64Array|Uint8Array):flatbuffers.Offset {
  builder.startVector(8, data.length, 8);
  for (let i = data.length - 1; i >= 0; i--) {
    builder.addFloat64(data[i]!);
  }
  return builder.endVector();
}

static startZVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(8, numElems, 8);
}

static addM(builder:flatbuffers.Builder, mOffset:flatbuffers.Offset) {
  builder.addFieldOffset(3, mOffset, 0);
}

static createMVector(builder:flatbuffers.Builder, data:number[]|Float64Array):flatbuffers.Offset;
/**
 * @deprecated This Uint8Array overload will be removed in the future.
 */
static createMVector(builder:flatbuffers.Builder, data:number[]|Uint8Array):flatbuffers.Offset;
static createMVector(builder:flatbuffers.Builder, data:number[]|Float64Array|Uint8Array):flatbuffers.Offset {
  builder.startVector(8, data.length, 8);
  for (let i = data.length - 1; i >= 0; i--) {
    builder.addFloat64(data[i]!);
  }
  return builder.endVector();
}

static startMVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(8, numElems, 8);
}

static addT(builder:flatbuffers.Builder, tOffset:flatbuffers.Offset) {
  builder.addFieldOffset(4, tOffset, 0);
}

static createTVector(builder:flatbuffers.Builder, data:number[]|Float64Array):flatbuffers.Offset;
/**
 * @deprecated This Uint8Array overload will be removed in the future.
 */
static createTVector(builder:flatbuffers.Builder, data:number[]|Uint8Array):flatbuffers.Offset;
static createTVector(builder:flatbuffers.Builder, data:number[]|Float64Array|Uint8Array):flatbuffers.Offset {
  builder.startVector(8, data.length, 8);
  for (let i = data.length - 1; i >= 0; i--) {
    builder.addFloat64(data[i]!);
  }
  return builder.endVector();
}

static startTVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(8, numElems, 8);
}

static addTm(builder:flatbuffers.Builder, tmOffset:flatbuffers.Offset) {
  builder.addFieldOffset(5, tmOffset, 0);
}

static createTmVector(builder:flatbuffers.Builder, data:bigint[]):flatbuffers.Offset {
  builder.startVector(8, data.length, 8);
  for (let i = data.length - 1; i >= 0; i--) {
    builder.addInt64(data[i]!);
  }
  return builder.endVector();
}

static startTmVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(8, numElems, 8);
}

static addType(builder:flatbuffers.Builder, type:GeometryType) {
  builder.addFieldInt8(6, type, GeometryType.Unknown);
}

static addParts(builder:flatbuffers.Builder, partsOffset:flatbuffers.Offset) {
  builder.addFieldOffset(7, partsOffset, 0);
}

static createPartsVector(builder:flatbuffers.Builder, data:flatbuffers.Offset[]):flatbuffers.Offset {
  builder.startVector(4, data.length, 4);
  for (let i = data.length - 1; i >= 0; i--) {
    builder.addOffset(data[i]!);
  }
  return builder.endVector();
}

static startPartsVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(4, numElems, 4);
}

static endGeometry(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createGeometry(builder:flatbuffers.Builder, endsOffset:flatbuffers.Offset, xyOffset:flatbuffers.Offset, zOffset:flatbuffers.Offset, mOffset:flatbuffers.Offset, tOffset:flatbuffers.Offset, tmOffset:flatbuffers.Offset, type:GeometryType, partsOffset:flatbuffers.Offset):flatbuffers.Offset {
  Geometry.startGeometry(builder);
  Geometry.addEnds(builder, endsOffset);
  Geometry.addXy(builder, xyOffset);
  Geometry.addZ(builder, zOffset);
  Geometry.addM(builder, mOffset);
  Geometry.addT(builder, tOffset);
  Geometry.addTm(builder, tmOffset);
  Geometry.addType(builder, type);
  Geometry.addParts(builder, partsOffset);
  return Geometry.endGeometry(builder);
}
}
