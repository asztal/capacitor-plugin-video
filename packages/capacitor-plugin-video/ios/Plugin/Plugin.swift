import Foundation
import Capacitor

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(CapacitorVideoPlugin)
public class CapacitorVideoPlugin: CAPPlugin {
    

    @objc func selectVideo(_ call: CAPPluginCall) {
        call.success([
            "path": "u wot m8?"
        ])
    }
}
