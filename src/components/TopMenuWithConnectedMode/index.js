import React from 'react';

import { Text, Link } from '@sitecore-jss/sitecore-jss-react';
import { Link as RouterLink } from 'react-router-dom';
import { loader as gqlLoader } from 'graphql.macro';
import GraphQLData from '../../lib/GraphQLData';

const ConnectedDemoQuery = gqlLoader('./query.graphql');

const TopMenuWithConnectedMode = (props) => {
  console.log('connected');
  console.log(props);
  const graphQLResult = props.connectedQuery;

  // Async loading and error handling
  // Remember to never return null from a JSS component when loading,
  // this will break Experience Editor.
  const { error, loading } = graphQLResult;

  // Query results load in using the name of their root field (see query.graphql)
  const { datasource, contextItem } = graphQLResult;

  return (
    <div data-e2e-id="graphql-connected">
      {loading && <p className="alert alert-info">GraphQL query is executing...</p>}

      {error && <p className="alert alert-danger">GraphQL query error: {error.toString()}</p>}
      {datasource && <div></div>}
      {contextItem && (
        <div>
          <nav>
            <div className="top_menu">
              <div className="container_12">
                <div className="grid_12">
                  <div id="mydroplinemenu" className="droplinebar">
                    <ul>
                      {contextItem.children.map((child) => (
                        <li key={child.id}>
                          <RouterLink to={child.url}>{child.pageTitle.value}</RouterLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
};

export default GraphQLData(ConnectedDemoQuery, { name: 'connectedQuery' })(
  TopMenuWithConnectedMode
);
