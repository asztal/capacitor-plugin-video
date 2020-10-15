# capacitor-plugin-video

A capacitor plugin for capturing videos from the camera or the user's photo gallery.

## Installing

Install via:

```sh
npm install --save capacitor-plugin-video
```

# API Reference

## selectVideo

Parameters: `{}`

Result: `{ path: string | undefined }`

* If the user selects a video, the `path` will be the file path of the selected video. To show this in the UI (such as with an `<video>` tag) use `Capacitor.convertFileSrc()` to get an image URL. 
* If the user cancels the video picker, the `path` field will be `undefined`.

Prompts the user to select a video from the photo gallery.

```tsx
function SelectVideoExample() {
    const [path, setPath] = useState<string>();
    const [error, setError] = useState<Error>();

    const handleClick = async () => {
        try {
            const result = await Capacitor.Plugins.CapacitorVideoPlugin.selectVideo({});
            setPath(result.path);
            setError(undefined);
        } catch(err) {
            setPath(undefined);
            setError(err);
        }
    };

    return (
        <div>
            <p>Please select a video.</p>
            <button type="button" onClick={handleClick}>Upload</button>
            {error && <strong>Error: {error.message}</strong>}
            {path && <em>Path: {path}</em>}
        </div>
    );
}
```

## TODO

* Permissions
* Options
* Allow selecting images and videos
* Allow capturing video from the camera
* Option to save video to the gallery

## Development 

Contributions welcome!
