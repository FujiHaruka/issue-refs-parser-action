class EnhancedArray extends Array {
  unique() {
    return EnhancedArray.from(new Set(this));
  }

  array() {
    return Array.from(this);
  }
}

module.exports = {
  EnhancedArray,
};
