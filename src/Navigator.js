// Navigator class

class Navigator {
  constructor() {
    this.infos = {
      appCodeName: navigator.appCodeName,
      appName: navigator.appName
    };
  }

  getName() {
    const { appCodeName, appName } = this.infos;
    return appCodeName + ' (' + appName + ')';
  }
}

export default Navigator;
