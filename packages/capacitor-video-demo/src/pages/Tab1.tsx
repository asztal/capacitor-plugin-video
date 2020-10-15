import { Capacitor } from "@capacitor/core";
import { IonButton, IonContent, IonHeader, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState } from 'react';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Browse</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Browse</IonTitle>
          </IonToolbar>
        </IonHeader>

        <Upload />
      </IonContent>
    </IonPage>
  );
};

function Upload() {
  const [path, setPath] = useState<string>();
  const [nativePath, setNativePath] = useState<string>();
  const [error, setError] = useState<Error>();

  const handleClick = async () => {
    try {
      const plugins = Capacitor.Plugins;
      if (!plugins)
        throw new Error("Plugins not loaded");

      const plugin = plugins.CapacitorVideoPlugin;
      if (!plugin)
        throw new Error("Plugin not found");

      const result = await plugin.selectVideo({});
      if (!result)
        throw new Error("Plugin did not return a result");
      setPath(result.path);
      setNativePath(result.path ? Capacitor.convertFileSrc(result.path) : undefined);
      setError(undefined);
    } catch(err) {
      setPath(undefined);
      setNativePath(undefined);
      setError(err);
    }
  };

  return (
    <div className="container">
      <div>
        <IonButton type="button" onClick={handleClick}>
          Upload Video
        </IonButton>
      </div>
      <IonList>
        <IonItem>
          <IonLabel>
            <h2>Result</h2>
            <p>{error ? `Error: ${error.message}` : path ? "Success" : "No result" }</p>
          </IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>
            <h2>File path</h2>
            <p>{path || "(not set)"}</p>
          </IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>
            <h2>Native file path</h2>
            <p>{nativePath || "(not set)"}</p>
          </IonLabel>
        </IonItem>
      </IonList>
    </div>
  );
}

export default Tab1;
