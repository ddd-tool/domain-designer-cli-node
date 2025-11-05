use serde::{Deserialize, Serialize};
use strsim::{
    jaro, jaro_winkler, normalized_damerau_levenshtein, normalized_levenshtein, sorensen_dice,
};

pub fn match_string(source: String, target: String) -> Option<f64> {
    let binding = split_camel_with_space(&source);
    let d_source = binding.as_str();
    let binding = split_camel_with_space(&target);
    let d_target = binding.as_str();
    let scores = vec![
        jaro(d_source, d_target),
        jaro_winkler(d_source, d_target),
        normalized_levenshtein(d_source, d_target),
        normalized_damerau_levenshtein(d_source, d_target),
        sorensen_dice(d_source, d_target),
    ];
    max(scores)
}

// 将驼峰变量名用空格分隔
fn split_camel_with_space(name: &String) -> String {
    let mut result = String::new();
    for (i, c) in name.chars().enumerate() {
        if i > 0 && c.is_uppercase() {
            result.push(' ');
        }
        result.push(c.to_ascii_lowercase());
    }
    result
}

fn max(arr: Vec<f64>) -> Option<f64> {
    arr.iter().fold(None, |max, x| {
        if max.is_none() {
            return Some(*x);
        } else if max.unwrap() < *x {
            return Some(*x);
        }
        return None;
    })
}

#[derive(Debug, Serialize, Deserialize)]
pub struct MatchRecord {
    pub source: String,
    pub target: String,
    pub score: f64,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct MatchResult {
    pub matches: Vec<MatchRecord>,
}

pub fn match_table(
    sources: Vec<String>,
    targets: Vec<String>,
    threshold: Option<f64>,
) -> MatchResult {
    let mut matches: Vec<MatchRecord> = vec![];
    for source in sources {
        for target in targets.iter() {
            if let Some(score) = match_string(source.clone(), target.clone()) {
                if threshold.is_none() || score > threshold.unwrap() {
                    matches.push(MatchRecord {
                        source: source.clone(),
                        target: target.clone(),
                        score,
                    });
                }
            }
        }
    }
    MatchResult { matches }
}
