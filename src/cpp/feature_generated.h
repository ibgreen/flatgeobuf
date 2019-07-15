// automatically generated by the FlatBuffers compiler, do not modify


#ifndef FLATBUFFERS_GENERATED_FEATURE_FLATGEOBUF_H_
#define FLATBUFFERS_GENERATED_FEATURE_FLATGEOBUF_H_

#include "flatbuffers/flatbuffers.h"

namespace FlatGeobuf {

struct Feature;

struct Feature FLATBUFFERS_FINAL_CLASS : private flatbuffers::Table {
  enum FlatBuffersVTableOffset FLATBUFFERS_VTABLE_UNDERLYING_TYPE {
    VT_FID = 4,
    VT_ENDS = 6,
    VT_LENGTHS = 8,
    VT_XY = 10,
    VT_Z = 12,
    VT_M = 14,
    VT_T = 16,
    VT_PROPERTIES = 18
  };
  uint64_t fid() const {
    return GetField<uint64_t>(VT_FID, 0);
  }
  const flatbuffers::Vector<uint32_t> *ends() const {
    return GetPointer<const flatbuffers::Vector<uint32_t> *>(VT_ENDS);
  }
  const flatbuffers::Vector<uint32_t> *lengths() const {
    return GetPointer<const flatbuffers::Vector<uint32_t> *>(VT_LENGTHS);
  }
  const flatbuffers::Vector<double> *xy() const {
    return GetPointer<const flatbuffers::Vector<double> *>(VT_XY);
  }
  const flatbuffers::Vector<double> *z() const {
    return GetPointer<const flatbuffers::Vector<double> *>(VT_Z);
  }
  const flatbuffers::Vector<double> *m() const {
    return GetPointer<const flatbuffers::Vector<double> *>(VT_M);
  }
  const flatbuffers::Vector<double> *t() const {
    return GetPointer<const flatbuffers::Vector<double> *>(VT_T);
  }
  const flatbuffers::Vector<uint8_t> *properties() const {
    return GetPointer<const flatbuffers::Vector<uint8_t> *>(VT_PROPERTIES);
  }
  bool Verify(flatbuffers::Verifier &verifier) const {
    return VerifyTableStart(verifier) &&
           VerifyField<uint64_t>(verifier, VT_FID) &&
           VerifyOffset(verifier, VT_ENDS) &&
           verifier.VerifyVector(ends()) &&
           VerifyOffset(verifier, VT_LENGTHS) &&
           verifier.VerifyVector(lengths()) &&
           VerifyOffset(verifier, VT_XY) &&
           verifier.VerifyVector(xy()) &&
           VerifyOffset(verifier, VT_Z) &&
           verifier.VerifyVector(z()) &&
           VerifyOffset(verifier, VT_M) &&
           verifier.VerifyVector(m()) &&
           VerifyOffset(verifier, VT_T) &&
           verifier.VerifyVector(t()) &&
           VerifyOffset(verifier, VT_PROPERTIES) &&
           verifier.VerifyVector(properties()) &&
           verifier.EndTable();
  }
};

struct FeatureBuilder {
  flatbuffers::FlatBufferBuilder &fbb_;
  flatbuffers::uoffset_t start_;
  void add_fid(uint64_t fid) {
    fbb_.AddElement<uint64_t>(Feature::VT_FID, fid, 0);
  }
  void add_ends(flatbuffers::Offset<flatbuffers::Vector<uint32_t>> ends) {
    fbb_.AddOffset(Feature::VT_ENDS, ends);
  }
  void add_lengths(flatbuffers::Offset<flatbuffers::Vector<uint32_t>> lengths) {
    fbb_.AddOffset(Feature::VT_LENGTHS, lengths);
  }
  void add_xy(flatbuffers::Offset<flatbuffers::Vector<double>> xy) {
    fbb_.AddOffset(Feature::VT_XY, xy);
  }
  void add_z(flatbuffers::Offset<flatbuffers::Vector<double>> z) {
    fbb_.AddOffset(Feature::VT_Z, z);
  }
  void add_m(flatbuffers::Offset<flatbuffers::Vector<double>> m) {
    fbb_.AddOffset(Feature::VT_M, m);
  }
  void add_t(flatbuffers::Offset<flatbuffers::Vector<double>> t) {
    fbb_.AddOffset(Feature::VT_T, t);
  }
  void add_properties(flatbuffers::Offset<flatbuffers::Vector<uint8_t>> properties) {
    fbb_.AddOffset(Feature::VT_PROPERTIES, properties);
  }
  explicit FeatureBuilder(flatbuffers::FlatBufferBuilder &_fbb)
        : fbb_(_fbb) {
    start_ = fbb_.StartTable();
  }
  FeatureBuilder &operator=(const FeatureBuilder &);
  flatbuffers::Offset<Feature> Finish() {
    const auto end = fbb_.EndTable(start_);
    auto o = flatbuffers::Offset<Feature>(end);
    return o;
  }
};

inline flatbuffers::Offset<Feature> CreateFeature(
    flatbuffers::FlatBufferBuilder &_fbb,
    uint64_t fid = 0,
    flatbuffers::Offset<flatbuffers::Vector<uint32_t>> ends = 0,
    flatbuffers::Offset<flatbuffers::Vector<uint32_t>> lengths = 0,
    flatbuffers::Offset<flatbuffers::Vector<double>> xy = 0,
    flatbuffers::Offset<flatbuffers::Vector<double>> z = 0,
    flatbuffers::Offset<flatbuffers::Vector<double>> m = 0,
    flatbuffers::Offset<flatbuffers::Vector<double>> t = 0,
    flatbuffers::Offset<flatbuffers::Vector<uint8_t>> properties = 0) {
  FeatureBuilder builder_(_fbb);
  builder_.add_fid(fid);
  builder_.add_properties(properties);
  builder_.add_t(t);
  builder_.add_m(m);
  builder_.add_z(z);
  builder_.add_xy(xy);
  builder_.add_lengths(lengths);
  builder_.add_ends(ends);
  return builder_.Finish();
}

inline flatbuffers::Offset<Feature> CreateFeatureDirect(
    flatbuffers::FlatBufferBuilder &_fbb,
    uint64_t fid = 0,
    const std::vector<uint32_t> *ends = nullptr,
    const std::vector<uint32_t> *lengths = nullptr,
    const std::vector<double> *xy = nullptr,
    const std::vector<double> *z = nullptr,
    const std::vector<double> *m = nullptr,
    const std::vector<double> *t = nullptr,
    const std::vector<uint8_t> *properties = nullptr) {
  auto ends__ = ends ? _fbb.CreateVector<uint32_t>(*ends) : 0;
  auto lengths__ = lengths ? _fbb.CreateVector<uint32_t>(*lengths) : 0;
  auto xy__ = xy ? _fbb.CreateVector<double>(*xy) : 0;
  auto z__ = z ? _fbb.CreateVector<double>(*z) : 0;
  auto m__ = m ? _fbb.CreateVector<double>(*m) : 0;
  auto t__ = t ? _fbb.CreateVector<double>(*t) : 0;
  auto properties__ = properties ? _fbb.CreateVector<uint8_t>(*properties) : 0;
  return FlatGeobuf::CreateFeature(
      _fbb,
      fid,
      ends__,
      lengths__,
      xy__,
      z__,
      m__,
      t__,
      properties__);
}

inline const FlatGeobuf::Feature *GetFeature(const void *buf) {
  return flatbuffers::GetRoot<FlatGeobuf::Feature>(buf);
}

inline const FlatGeobuf::Feature *GetSizePrefixedFeature(const void *buf) {
  return flatbuffers::GetSizePrefixedRoot<FlatGeobuf::Feature>(buf);
}

inline bool VerifyFeatureBuffer(
    flatbuffers::Verifier &verifier) {
  return verifier.VerifyBuffer<FlatGeobuf::Feature>(nullptr);
}

inline bool VerifySizePrefixedFeatureBuffer(
    flatbuffers::Verifier &verifier) {
  return verifier.VerifySizePrefixedBuffer<FlatGeobuf::Feature>(nullptr);
}

inline void FinishFeatureBuffer(
    flatbuffers::FlatBufferBuilder &fbb,
    flatbuffers::Offset<FlatGeobuf::Feature> root) {
  fbb.Finish(root);
}

inline void FinishSizePrefixedFeatureBuffer(
    flatbuffers::FlatBufferBuilder &fbb,
    flatbuffers::Offset<FlatGeobuf::Feature> root) {
  fbb.FinishSizePrefixed(root);
}

}  // namespace FlatGeobuf

#endif  // FLATBUFFERS_GENERATED_FEATURE_FLATGEOBUF_H_
