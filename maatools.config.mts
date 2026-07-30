export default {
  cwd: import.meta.dirname,
  maaVersion: 'latest',
  interfacePath: 'interface.json',
  check: {
    override: {
      'dynamic-image': 'ignore',
      'unknown-task': 'warning',
    },
  },
  vscode: {
    agents: {
      uv: 'Maa Agent: Debug',
    },
  },
}
