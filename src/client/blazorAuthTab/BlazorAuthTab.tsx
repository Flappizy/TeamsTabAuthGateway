import * as React from "react";
import { Provider, Flex, Text, Button, Header } from "@fluentui/react-northstar";
import { useState, useEffect } from "react";
import { useTeams } from "msteams-react-base-component";
import * as microsoftTeams from "@microsoft/teams-js";

/**
 * Implementation of the blazorAuthTab content page
 */
export const BlazorAuthTab = () => {

    const [{ inTeams, theme, context }] = useTeams();
    const [entityId, setEntityId] = useState<string | undefined>();

    const getAccessTokenAndRedirect = async (promptConsent: boolean = false): Promise < string > => {
        return new Promise<string>((resolve, reject) => {
          microsoftTeams.authentication.authenticate({
            url: window.location.origin + "/auth-start.html",
            width: 600,
            height: 535,
            successCallback: (accessToken: string) => {
              resolve(accessToken);
              microsoftTeams.navigateCrossDomain("your webapp url");
            },
            failureCallback: (reason) => {
              reject(reason);
            }
          });
        });
      }

      const handleGetMyMessagesOnClick = async (event): Promise<void> => {
        await getAccessTokenAndRedirect();
      }

    /**
     * The render() method to create the UI of the tab
     */
     return (
        <Provider theme={theme}>
          <Flex column gap="gap.small">
            <Header>Please Click the button to get the Union Bank's ME-OPSMANAGER App</Header>
            <Button primary
                    content="Press button to get app content"
                    onClick={handleGetMyMessagesOnClick}></Button>
          </Flex>
        </Provider>
      );
};
