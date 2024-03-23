import React from 'react';
import { View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

interface WikipediaWebviewProps {
    wikipediaUrl: string
}

export const WikipediaWebView: React.FC<WikipediaWebviewProps> = ({ wikipediaUrl }) => {
    if (!wikipediaUrl) {
        return null;
    }

    return (
        <View style={styles.container}>
            <WebView
                source={{ uri: wikipediaUrl }}
                style={styles.webView}
                originWhitelist={['*']}
                javaScriptEnabled={true}
                domStorageEnabled={true}
                startInLoadingState={true}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%'
    },
    webView: {
        flex: 1,
    },
});
