import { CapacitorVideoPlugin } from "capacitor-plugin-video";
import { IonButton, IonContent, IonHeader, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState } from 'react';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
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

  const handleClick = () => {
    console.log(CapacitorVideoPlugin.echo({ value: "Hello" }));
    setPath(path);
    setNativePath(nativePath);
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
