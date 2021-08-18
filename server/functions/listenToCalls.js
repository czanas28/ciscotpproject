module.exports = {
  listenToCallConnect(xapi) {
    xapi.Event.CallSuccessful.on(async () => {
      const call = await xapi.Status.Call.get();
      const cbnum = call[0].CallbackNumber;
      return { call, cbnum };
    });
  },
  listenToCallDisconnect() {
    xapi.Event.CallDisconnect.on(async () => {});
  },
};
