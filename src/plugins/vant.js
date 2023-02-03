import { Button, Icon, Dialog, ConfigProvider, Switch, Cell } from 'vant';
import 'vant/lib/index.css';
export function registerVant(app) {
  app
    .use(Button)
    .use(Icon)
    .use(Dialog)
    .use(ConfigProvider)
    .use(Switch)
    .use(Cell);
}
