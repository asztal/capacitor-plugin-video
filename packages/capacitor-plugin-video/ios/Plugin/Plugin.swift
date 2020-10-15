import Foundation
import Capacitor

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(CapacitorVideoPlugin)
public class CapacitorVideoPlugin: CAPPlugin, UIImagePickerControllerDelegate, UINavigationControllerDelegate {
    var call: CAPPluginCall?
    let imagePickerController = UIImagePickerController()

    @objc func selectVideo(_ call: CAPPluginCall) {
        if (self.call != nil) {
            call.error("Video picker is already in progress")
            return
        }
        
        self.call = call
        
        DispatchQueue.main.async {
            self.imagePickerController.sourceType = .photoLibrary
            self.imagePickerController.delegate = self
            self.imagePickerController.mediaTypes = ["public.movie"]
            self.imagePickerController.allowsEditing = call.getBool("allowEditing") ?? false
            self.bridge.viewController.present(self.imagePickerController, animated: true)
        }
    }
    
    public func imagePickerControllerDidCancel(_ picker: UIImagePickerController) {
        picker.dismiss(animated: true)
        
        call?.success([String: Any]())
        call = nil
    }
    
    public func imagePickerController(_ picker: UIImagePickerController, didFinishPickingMediaWithInfo info: [UIImagePickerController.InfoKey : Any]) {
        picker.dismiss(animated: true)
        
        guard let call = self.call else { return }
        self.call = nil
        
        guard let videoURL = info[.mediaURL] as? URL else {
            call.error("Failed to get video URL")
            return
        }
        
        call.success([ "path": videoURL.absoluteString ])
    }
}
