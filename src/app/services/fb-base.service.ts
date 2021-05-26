import { Injectable } from '@angular/core';
import { AngularFirestore, CollectionReference, Query } from '@angular/fire/firestore';
import { usage_reports } from '../shared/models/usage_reports.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FbBaseService {

  constructor(private afs: AngularFirestore) { }

  get(collectionName: string): Observable<usage_reports[]> {
    return this.afs.collection(collectionName, ref => {
      let query: CollectionReference | Query = ref;
      query = query.orderBy('dataConsumption', 'asc');
      return query;
    }).valueChanges() as Observable<usage_reports[]>;
  }

  getHighUsages(collectionName: string, limit?: any){
    return this.afs.collection(collectionName, ref => {
      let query: CollectionReference | Query = ref;
      if(limit) {
        query = query.limit(limit);
      }
      query = query.where('dataConsumption', '>', 25).orderBy('dataConsumption', 'asc');

      return query;
    }).valueChanges();
  }

  getFavorites(collectionName: string, limit?: any){
    return this.afs.collection(collectionName, ref => {
      let query: CollectionReference | Query = ref;
      if(limit) {
        query = query.limit(limit);
      }
      query = query.where('star', '==', true);

      return query;
    }).valueChanges();
  }

  getById(collectionName: string, id: any){
    return this.afs.collection(collectionName).doc(id).get();
  }

  async add(collectionName: string, data: usage_reports, id?: string): Promise<string> {
    const uid = id ? id : this.afs.createId();
    data.docId = uid;
    await this.afs.collection(collectionName).doc(uid).set(data);
    return uid;
  }

  async update(collectionName: string, id: any, data: any): Promise<string> {
    await this.afs.collection(collectionName).doc(id).update(data);
    return id;
  }

  async delete(collectionName: string, id: string): Promise<string> {
    await this.afs.collection(collectionName).doc(id).delete();
    return id;
  }

  weakAdd(collectionName: string, data: usage_reports) {
    return this.afs.collection(collectionName).add(data);
  }
}
