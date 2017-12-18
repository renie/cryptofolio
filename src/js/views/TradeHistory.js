import ViewUtils from './ViewUtils';

const TradeHistory = () => {
  const me = {
    template: ViewUtils().getTemplate('history')
  };

  ViewUtils().render(me.template, '#main');

  return me;
};

module.exports = TradeHistory;