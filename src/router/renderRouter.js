import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { RederRouter } from "./routerUtil";
export const { Provider, Consumer } = React.createContext([]);
export default () => {
    return (
        <Consumer>
            {
                (props) => {
                    let { config, routerProps = {} } = props;
                    return <Switch>
                        {
                            config ? config.map((routerItem, index) => {
                                return (
                                    <Route path={routerItem.path}
                                        key={index}
                                        exact={routerItem.exact}
                                        render={props => {
                                            return <Provider value={{ config: routerItem.children }}>
                                                <RederRouter
                                                    {...props}
                                                    route={routerItem}
                                                    routerProps={routerProps} />
                                            </Provider>
                                        }
                                        }>
                                    </Route>
                                )

                            })
                                : null
                        }
                    </Switch >
                }
            }
        </Consumer>
    )
}

