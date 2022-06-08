const getAssets = (request) => {
  const stats = request.webpack.stats.toJson({
    assets: true,
  });
  const scripts = [];
  const styles = [];

  for (const asset of stats.entrypoints?.main.assets ?? []) {
    if (asset.name.endsWith('.js')) {
      scripts.push(asset.name);
    }
    if (asset.name.endsWith('.css')) {
      styles.push(asset.name);
    }
  }

  return {
    scripts,
    styles,
  };
};

module.exports = getAssets;
