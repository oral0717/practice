let handler = {
  onLaunch (){
    console.log('app init,execise once')
  },
  globalData: {
    user: {
      name: '',
      avatar: ''
    }
  }
};

App(handler);