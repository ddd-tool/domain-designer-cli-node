mod strsim;

use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn match_string(a: String, b: String) -> f64 {
    strsim::match_string(a, b).unwrap_or(0.0)
}

#[wasm_bindgen]
pub fn match_table(sources: Vec<String>, targets: Vec<String>, threshold: Option<f64>) -> JsValue {
    serde_wasm_bindgen::to_value(&strsim::match_table(sources, targets, threshold)).unwrap()
}
